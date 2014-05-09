(function() {
  'use strict';
  angular.module('app', ['ngRoute', 'ngCookies', 'ngResource', 'ui.bootstrap', 'app.controllers', 'app.directives', 'app.filters', 'app.services']).config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, config) {
      $routeProvider.when('/', {
        templateUrl: 'partials/posts_list.html'
      }).otherwise({
        redirectTo: '/'
      });
      return $locationProvider.html5Mode(false).hashPrefix("!");
    }
  ]);

  angular.element(document).ready(function() {
    return angular.bootstrap(document, ['app']);
  });

}).call(this);

(function() {
  'use strict';

  /* Controllers */
  angular.module('app.controllers', []).controller('NavCtrl', [
    '$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
      $scope.navTitleConfig = {
        '/': "文章列表"
      };
      $scope.$watch((function() {
        return $location.path();
      }), function(path) {
        return $rootScope.pageTitle = $scope.navTitleConfig[path];
      });
      return $scope.getNavClass = function(path) {
        if ($location.path().indexOf(path) === 0) {
          return 'active';
        } else {
          return '';
        }
      };
    }
  ]).controller('PostListCtrl', [
    '$scope', '$log', '$routeParams', '$window', '$q', 'ghposts', function($scope, $log, $routeParams, $window, $q, ghposts) {
      $scope.posts = [];
      ghposts("bolasblack", "BlogPosts")["catch"](function(err) {
        $log.log("fetch posts list error:", err);
        return $q.reject(err);
      }).then(function(posts) {
        return $scope.posts = posts;
      });
      return $scope.avgrundOpts = {
        render: function($scope, callback) {
          return $scope.post.fetchContent(function(err, post) {
            var metaData;
            if (err) {
              return false;
            }
            metaData = post.getMetaData();
            return callback("<div class=\"modal-header\">\n  <h4 class=\"modal-title\">" + metaData.title + "</h4>\n</div>\n<div class=\"modal-body\">\n  <article id=\"article" + metaData.identifier + "\">\n    " + (post.getHtmlContent()) + "\n    <div id=\"disqus_thread\"></div>\n  </article>\n</div>");
          });
        }
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /* Directives */
  angular.module('app.directives', []).directive('avgrund', [
    function() {
      var $modal, spin;
      $modal = angular.element('#avgrund-modal');
      spin = new Spinner;
      return {
        link: function($scope, $elem, attrs) {
          var clean, options;
          options = angular.copy($scope.$eval(attrs.avgrund));
          angular.element('body').addClass("avgrund-ready");
          $elem.on('click', function() {
            spin.spin(angular.element('.article-list')[0]);
            return typeof options.render === "function" ? options.render($scope, function(html) {
              spin.stop();
              angular.element('.avgrund-wrapper').addClass('avgrund-active');
              $modal.find('.modal-content').html(html);
              return $modal.modal('show');
            }) : void 0;
          });
          clean = function() {
            angular.element('.avgrund-wrapper').removeClass('avgrund-active');
            return typeof options.clean === "function" ? options.clean($scope) : void 0;
          };
          $modal.on('hide.bs.modal', clean);
          return $scope.$on('$destroy', function() {
            return $modal.off('hide.bs.modal', clean);
          });
        }
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /* Filters */
  angular.module('app.filters', []).filter('interpolate', [
    'version', function(version) {
      return function(text) {
        return String(text).replace(/\%VERSION\%/mg, version);
      };
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /* Sevices */
  angular.module('app.services', ['ngResource']).factory("Gh3.File", function() {
    var fetchContent, parsePostData;
    parsePostData = function(post) {
      var contentParts, createTimeRE, createTimeStr, metaData, name, rawContent, unemptyParts;
      rawContent = post.getRawContent();
      if (rawContent) {
        contentParts = rawContent.split(/^[\s-]+$/m);
        unemptyParts = _.select(contentParts, function(part) {
          return part.replace(/\s/g, "");
        });
        if (contentParts[0].replace(/-/g, "") === "") {
          metaData = $.extend(post.metaData, jsyaml.load(unemptyParts[0]));
          delete metaData.title;
          post.metaData = metaData;
          post.postData = unemptyParts[1];
        } else {
          post.postData = unemptyParts[0];
        }
        post.htmlData = marked(post.postData);
      }
      name = post.name.replace(/\.(md|markdown)$/, "");
      createTimeRE = /^\d{4}-\d{1,2}-\d{1,2}-/;
      createTimeStr = name.match(createTimeRE)[0].slice(0, -1);
      if (post.metaData == null) {
        post.metaData = {};
      }
      post.metaData.identifier = createTimeStr;
      post.metaData.create_at_str = createTimeStr;
      post.metaData.create_at = moment(createTimeStr).toDate().getTime();
      return post.metaData.title = name.replace(createTimeRE, "").replace(/([^\\])_/g, "$1 ");
    };
    fetchContent = Gh3.File.prototype.fetchContent;
    return Gh3.File.extend({
      getMetaData: function() {
        parsePostData(this);
        return this.metaData;
      },
      getPostContent: function() {
        if (!this.postData) {
          parsePostData(this);
        }
        return this.postData;
      },
      getHtmlContent: function() {
        if (!this.htmlData) {
          parsePostData(this);
        }
        return this.htmlData;
      }
    });
  }).factory("Gh3.FileList", [
    '$q', '$log', 'Gh3.File', function($q, $log, File) {
      return function(files) {
        var filelist;
        filelist = _.map(files, function(file) {
          if (!(file instanceof File)) {
            $log.error(file, "must instanceof", File);
          }
          return file;
        });
        filelist.fetchContents = function(start, end) {
          var fetchDefers, range;
          if (start == null) {
            start = 0;
          }
          if (end == null) {
            end = 5;
          }
          range = this.slice(start, end);
          fetchDefers = _.map(range, function(file) {
            var defer;
            defer = $q.defer();
            if (file.getRawContent()) {
              defer.resolve(file);
            } else {
              file.fetchContent(function(err, file) {
                if (err) {
                  return defer.reject(err);
                }
                return defer.resolve(file);
              });
            }
            return defer.promise;
          });
          return $q.all(fetchDefers);
        };
        filelist.sort(function(file1, file2) {
          var f1createAt, f2createAt;
          f1createAt = file1.getMetaData().create_at;
          f2createAt = file2.getMetaData().create_at;
          if (f1createAt > f2createAt) {
            return -1;
          } else if (f1createAt === f2createAt) {
            return 0;
          } else {
            return 1;
          }
        });
        return filelist;
      };
    }
  ]).factory("ghrepo", [
    "$window", "$resource", "$q", function($window, $resource, $q) {
      return function(username, reponame) {
        var defer, repo, user;
        defer = $q.defer();
        user = new Gh3.User(username);
        repo = new Gh3.Repository(reponame, user);
        repo.fetch(function(err, resp) {
          if (err) {
            return defer.reject(err);
          }
          return defer.resolve(resp);
        });
        return defer.promise;
      };
    }
  ]).factory("ghposts", [
    '$q', 'ghrepo', 'Gh3.File', 'Gh3.FileList', function($q, ghrepo, File, FileList) {
      return function(username, reponame) {
        var defer;
        defer = $q.defer();
        asyncWaterfall([
          function(callback) {
            return $.ajax({
              url: "https://api.github.com/repos/" + username + "/" + reponame + "/contents"
            }).fail(function(jqXHR, textStatus, errorThrown) {
              return callback(jqXHR.responseText);
            }).done(function(data, textStatus, jqXHR) {
              return callback(null, data);
            });
          }, function(contents, callback) {
            var posts;
            posts = _(contents).filter(function(content) {
              return content.type === "file" && content.name.charAt(0) !== ".";
            }).map(function(post) {
              return new File(post, new Gh3.User(username), reponame, "master");
            }).value();
            return defer.resolve(new FileList(posts));
          }
        ], function(err) {
          return defer.reject(err);
        });
        return defer.promise;
      };
    }
  ]);

}).call(this);
