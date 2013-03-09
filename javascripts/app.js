'use strict';
var App;

App = angular.module('app', ['ngCookies', 'ngResource', 'ui.bootstrap', 'app.controllers', 'app.directives', 'app.filters', 'app.services']);

App.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, config) {
    $routeProvider.when('/', {
      templateUrl: '/partials/posts_list.html'
    }).otherwise({
      redirectTo: '/'
    });
    return $locationProvider.html5Mode(false).hashPrefix("!");
  }
]);

angular.element(document).ready(function() {
  return angular.bootstrap(document, ['app']);
});
'use strict';
/* Controllers
*/

angular.module('app.controllers', []).controller('NavCtrl', [
  '$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
    $scope.$location = $location;
    $scope.navTitleConfig = {
      '/': "文章列表"
    };
    $scope.$watch('$location.path()', function(path) {
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
  '$scope', '$log', '$routeParams', '$window', 'ghposts', 'Deferred', 'DeferredQueue', function($scope, $log, $routeParams, $window, ghposts, Deferred, DeferredQueue) {
    $scope.posts = [];
    ghposts("bolasblack", "BlogPosts").fail(function(err) {
      return $log.log("fetch posts list error:", err);
    }).done(function(posts) {
      $scope.posts = posts;
      if (!$scope.$$phase) {
        return $scope.$digest();
      }
    });
    return $scope.avgrundOpts = {
      width: 640,
      height: "auto",
      clean: function($scope) {
        return $window.DISQUS = null;
      },
      render: function($scope, callback) {
        return $scope.post.fetchContent(function(err, post) {
          var metaData;
          if (err) {
            return false;
          }
          metaData = post.getMetaData();
          debugger;
          return callback("<div class=\"modal-header\">" + metaData.title + "</div>\n<div class=\"modal-body\" style=\"max-height:none;\">\n  <article id=\"article" + metaData.identifier + "\">\n    " + (post.getHtmlContent()) + "\n    <div id=\"disqus_thread\"></div>\n  </article>\n</div>\n<script>\n  var disqus_shortname = 'plaferinfo',\n      disqus_identifier = '" + metaData.identifier + "',\n      disqus_title = '" + metaData.title + "',\n      disqus_url = '" + window.location.href + metaData.identifier + "'\n\n  ;(function() {\n    var d = window.document,\n        t = function(tn) { return d.getElementsByTagName(tn)[0] },\n        elem = d.getElementById(\"article" + metaData.identifier + "\"),\n        dsq = d.createElement('script')\n\n    hljs.highlightBlock(elem);\n    dsq.type = 'text/javascript'\n    dsq.async = true\n    dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js'\n    ;(t('head') || t('body')).appendChild(dsq)\n  })()\n</script>");
        });
      }
    };
  }
]);
'use strict';
/* Directives
*/

angular.module('app.directives', []).directive('avgrund', [
  function() {
    return {
      link: function($scope, elem, attrs) {
        var options;
        options = angular.copy($scope.$eval(attrs.avgrund));
        options.onLoad = function() {
          return typeof options.render === "function" ? options.render($scope, function(html) {
            var $elem;
            $elem = $(".avgrund-popin").detach();
            $(".avgrund-overlay").append($elem);
            return $elem.html(html);
          }) : void 0;
        };
        options.onUnload = function() {
          return typeof options.clean === "function" ? options.clean($scope) : void 0;
        };
        return $(elem).avgrund(options);
      }
    };
  }
]);
'use strict';
/* Filters
*/

angular.module('app.filters', []).filter('interpolate', [
  'version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }
]);
'use strict';
/* Sevices
*/

var __slice = [].slice;

angular.module('app.services', ['ngResource']).factory('Deferred', function() {
  return function() {
    return $.Deferred();
  };
}).factory('DeferredQueue', function() {
  return function() {
    var deferreds;
    deferreds = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (_(deferreds[0]).isArray()) {
      deferreds = deferreds[0];
    }
    return $.when.apply($, deferreds);
  };
}).factory("Gh3.File", function() {
  var fetchContent, parsePostData;
  parsePostData = function(post) {
    var contentParts, createTimeRE, createTimeStr, metaData, name, rawContent, validParts, _ref;
    rawContent = post.getRawContent();
    if (rawContent) {
      contentParts = rawContent.split(/^-+$/m);
      validParts = _(contentParts).select(function(part) {
        return part.replace(/\s/g, "");
      });
      if (contentParts[0].replace(/-/g, "") === "") {
        metaData = $.extend(post.metaData, jsyaml.load(validParts[0]));
        delete metaData.title;
        post.metaData = metaData;
        post.postData = validParts[1];
      } else {
        post.postData = validParts[0];
      }
      post.htmlData = marked(post.postData);
    }
    name = post.name.replace(/\.(md|markdown)$/, "");
    createTimeRE = /^\d{4}-\d{1,2}-\d{1,2}-/;
    createTimeStr = name.match(createTimeRE)[0].slice(0, -1);
    if ((_ref = post.metaData) == null) {
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
  '$log', 'Gh3.File', 'Deferred', 'DeferredQueue', function($log, File, Deferred, DeferredQueue) {
    return function(files) {
      var filelist;
      filelist = _(files).map(function(file) {
        if (!(file instanceof File)) {
          $log.error(file, "must instanceof", File);
        }
        return file;
      });
      filelist.fetchContents = function(start, end) {
        var fetchDeferreds, listDeferred, range;
        if (start == null) {
          start = 0;
        }
        if (end == null) {
          end = 5;
        }
        listDeferred = Deferred();
        range = this.slice(start, end);
        fetchDeferreds = _(range).map(function(file) {
          var deferred;
          deferred = Deferred();
          if (file.getRawContent()) {
            deferred.resolve(file);
          } else {
            file.fetchContent(function(err, file) {
              if (err) {
                return deferred.reject(err);
              } else {
                return deferred.resolve(file);
              }
            });
          }
          return deferred;
        });
        DeferredQueue(fetchDeferreds).done(function() {
          var files;
          files = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          return listDeferred.resolve(files);
        }).fail(function(err) {
          return listDeferred.reject(err);
        });
        return listDeferred.promise();
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
  "$window", "$resource", "Deferred", function($window, $resource, Deferred) {
    return function(username, reponame) {
      var deferred, repo, user;
      deferred = Deferred();
      user = new Gh3.User(username);
      repo = new Gh3.Repository(reponame, user);
      repo.fetch(function(err, resp) {
        if (err) {
          return deferred.reject(err);
        }
        return deferred.resolve(resp);
      });
      return deferred.promise();
    };
  }
]).factory("ghposts", [
  'ghrepo', 'Deferred', 'Gh3.File', 'Gh3.FileList', function(ghrepo, Deferred, File, FileList) {
    return function(username, reponame) {
      var deferred, postList;
      deferred = Deferred();
      postList = _.waterfall(function(callback) {
        return $.ajax({
          url: "https://api.github.com/repos/" + username + "          /" + reponame + "/contents",
          headers: {
            "Origin": location.host
          }
        }).fail(function(jqXHR, textStatus, errorThrown) {
          return callback(jqXHR.responseText);
        }).done(function(data, textStatus, jqXHR) {
          return callback(null, data);
        });
      }).then(function(contents, callback) {
        var posts;
        posts = _(contents).chain().filter(function(content) {
          return content.type === "file" && content.name.charAt(0) !== ".";
        }).map(function(post) {
          return new File(post, new Gh3.User(username), reponame, "master");
        }).value();
        return deferred.resolve(new FileList(posts));
      }).fail(function(err) {
        return deferred.reject(err);
      });
      postList();
      return deferred.promise();
    };
  }
]);
