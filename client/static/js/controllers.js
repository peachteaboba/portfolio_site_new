/**
 * Created by andyf on 6/26/18
 */



app.controller('mainController', ["$scope", '$document', "$window", "$location", "$timeout", '$anchorScroll', "MetricFactory", function ($scope, $document, $window, $location, $timeout, $anchorScroll, MetricFactory) {


    // Scope variables
    // ---------------
    // ---------------
    $scope.metrics = {};
    $scope.where = "";



    // Header hover flags
    // ------------------
    // ------------------
    $scope.hvrIN = false;
    $scope.hvrINST = false;
    $scope.hvrGIT = false;


    // Flags (Misc)
    // ------------
    // ------------
    $scope.init = 1;
    $scope.copied = 0;
    $scope.aniSkill = 0;
    $scope.aniEdu = 0;
    $scope.aniWordd = 0;
    $scope.subHover = 0;
    $scope.hamHover = 0;


    // Vertical Scroll
    // ---------------
    // ---------------
    $scope.offsetY = 0;



    // Retrieve site metrics
    // ---------------------
    // ---------------------
    function fetchSiteMetrics() {
        MetricFactory.index(function (data) {
            $scope.metrics = data;
            console.log(data);
            goToTop();
        });
    }
    fetchSiteMetrics();


    // Automatically scroll to top on page load
    // ----------------------------------------
    // ----------------------------------------
    function goToTop() {
        $document.scrollTop(0, 1).then(function() {
            $scope.where = 'top';
        });
        $scope.init = 1;
        $timeout(function() {
            $scope.init = 0;
        }, 1500);
    }

    // Handle header links clicked
    // ---------------------------
    // ---------------------------
    $scope.linkedIn = function () {
        MetricFactory.incLI(function (data) {
            $scope.metrics = data;
        });
        $window.open('//linkedin.com/in/andy-feng-64563035');
    };

    $scope.gitHub = function () {
        MetricFactory.incGH(function (data) {
            $scope.metrics = data;
        });
        $window.open('//github.com/peachteaboba');
    };

    $scope.inst = function () {
        MetricFactory.incINST(function (data) {
            $scope.metrics = data;
        });
        $window.open('//www.instagram.com/peachteaboba/');
    };


    // Handle email clicked, copy to clipboard
    // ---------------------------------------
    // ---------------------------------------
    $scope.email = function () {
        MetricFactory.incEmail(function (data) {
            $scope.metrics = data;
        });
        Clipboard.copy("anndyfeng1@gmail.com", function (status) {
            console.log("Successfully copied email address to clipboard ( " + status + " )");
            $scope.copied = 1;
            $timeout(function () {
                $scope.copied = 0;
            }, 1500);
        });
    };

    // ...............................................
    // ...............................................
    // ...............................................
    // ...............................................
    // .............                     .............
    // .............  Bitworth Specific  .............
    // .............                     .............
    // ...............................................
    // ...............................................
    // ...............................................
    // ...............................................

    // Handle Bitworth related links clicked
    // -------------------------------------
    // -------------------------------------
    $scope.appStore = function () {
        $window.open('https://appsto.re/us/cI02jb.i');
        MetricFactory.incBitworth(function (data) {
            $scope.metrics = data;
        });
    };

    $scope.bitworthSite = function () {
        $window.open('https://bitworth.app');
        MetricFactory.incBitworth(function (data) {
            $scope.metrics = data;
        });
    };

    // .......... Rotate bitworth screenshots ..........
    // .................................................
    // .................................................
    let maxIdx = 5;
    $scope.bw_screenshot_idx = 0;
    $scope.bw_screenshot_idx_next = 1;

    // Make the top image fade away
    $scope.fadeCurrent = false;
    $scope.fadeNext = true;

    // Recursively rotate screenshots
    function rotateBitworthScreens() {
        if ($scope.fadeNext) {
            $scope.fadeNext = false;
            $scope.fadeCurrent = true;
            $timeout(function () {
                // Shift idx
                if ($scope.bw_screenshot_idx < maxIdx) {
                    $scope.bw_screenshot_idx += 1;
                } else {
                    $scope.bw_screenshot_idx = 0;
                }
                rotateBitworthScreens();
            }, 2000);
        } else {
            $scope.fadeNext = true;
            $scope.fadeCurrent = false;
            $timeout(function () {
                // Shift idx_next
                if ($scope.bw_screenshot_idx_next < maxIdx) {
                    $scope.bw_screenshot_idx_next  += 1;
                } else {
                    $scope.bw_screenshot_idx_next  = 0;
                }
                rotateBitworthScreens();
            }, 2000);
        }
    }

    // Kick of screens rotation after 2 seconds
    $timeout(function () {
        rotateBitworthScreens();
    }, 2000);
    // .................................................
    // .................................................
    // .................................................


    // ...............................................
    // ...............................................
    // ...............................................
    // ...............................................
    // .............                     .............
    // .............    Wordd Specific   .............
    // .............                     .............
    // ...............................................
    // ...............................................
    // ...............................................
    // ...............................................

    // Handle Wordd related links clicked
    // ----------------------------------
    // ----------------------------------
    $scope.appStoreWordd = function () {
        $window.open('https://itunes.apple.com/us/app/wordd/id1147289887?mt=8');
        MetricFactory.incWordd(function (data) {
            $scope.metrics = data;
        });
    };

    // ...................................................
    // ...................................................
    // ...................................................
    // ...................................................
    // .............                         .............
    // .............  Web Projects Specific  .............
    // .............                         .............
    // ...................................................
    // ...................................................
    // ...................................................
    // ...................................................

    // Handle Web related links clicked
    // --------------------------------
    // --------------------------------
    $scope.sub = function () {
        $window.open('//subman.io');
        MetricFactory.incSub(function (data) {
            $scope.metrics = data;
        });
    };

    $scope.ham = function () {
        $window.open('//hamster.gold');
        MetricFactory.incHam(function (data) {
            $scope.metrics = data;
        });
    };

    // Hover animations for web section
    // --------------------------------
    // --------------------------------
    $scope.subHoverE = function () {
        $scope.subHover = 1;
    };

    $scope.subHoverL = function () {
        $scope.subHover = 0;
    };

    $scope.hamHoverE = function () {
        $scope.hamHover = 1;
    };

    $scope.hamHoverL = function () {
        $scope.hamHover = 0;
    };


    // ...................................................
    // ...................................................
    // ...................................................
    // ...................................................
    // .............                         .............
    // .............    Education Specific   .............
    // .............                         .............
    // ...................................................
    // ...................................................
    // ...................................................
    // ...................................................

    // Force re-animate edu bar when clicked
    // -------------------------------------
    // -------------------------------------
    $scope.animateEdu = function () {
        $scope.aniEdu = 1;
        $timeout(function () {
            $scope.aniEdu = 0;
        }, 1000);
    };


    // ...................................................
    // ...................................................
    // ...................................................
    // ...................................................
    // .............                         .............
    // .............     Scroll Animations   .............
    // .............                         .............
    // ...................................................
    // ...................................................
    // ...................................................
    // ...................................................

    $timeout(function () {

        // Vertical distance from the top of the page to the top of the edu-wrapper div
        // ----------------------------------------------------------------------------
        // ----------------------------------------------------------------------------
        let worddDivTop = angular.element(document.getElementById("wordd")).prop('offsetTop');
        let skillDivTop = angular.element(document.getElementById("skill")).prop('offsetTop');
        let eduDivTop = angular.element(document.getElementById("edu")).prop('offsetTop');

        // Initialize variable to hold animation trigger point
        // ---------------------------------------------------
        // ---------------------------------------------------
        let eduTrigger;
        let skillTrigger;
        let worddTrigger;
        
        angular.element($window).on('scroll', function () {

            // Record vertical offset
            // ----------------------
            // ----------------------
            $scope.offsetY = this.pageYOffset;

            // Toggle header bar styles
            // ------------------------
            // ------------------------
            if (this.pageYOffset >= 25) {
                // Scrolled below header
                $scope.where = 'bottom';
            } else {
                // Header is in view
                $scope.where = 'top';
            }

            // Animate wordd section
            // ---------------------
            // ---------------------
            worddTrigger = worddDivTop - ($window.innerHeight / 2);
            if (this.pageYOffset >= worddTrigger) {
                if ($scope.aniWordd !== 1) {
                    $scope.aniWordd = 1;
                }
            }

            // Animate skills section
            // ----------------------
            // ----------------------
            skillTrigger = skillDivTop - ($window.innerHeight / 3);
            if (this.pageYOffset >= skillTrigger) {
                if ($scope.aniSkill !== 1) {
                    $scope.aniSkill = 1;
                }
            }

            // Animate edu section
            // -------------------
            // -------------------
            eduTrigger = eduDivTop - ($window.innerHeight / 2);
            if (this.pageYOffset >= eduTrigger) {
                if ($scope.aniEdu !== 1) {
                    $scope.aniEdu = 1;
                }
            }

            $scope.$apply();
        });

    }, 500);


}]);

window.Clipboard = (function (window, document, navigator) {
    let textArea,
        copy;

    function isOS() {
        return navigator.userAgent.match(/ipad|ipod|iphone/i);
    }

    function createTextArea(text, cb) {
        if (isOS()) {
            textArea = document.createElement('textArea');
            textArea.value = text;
            document.body.appendChild(textArea);
            selectText(text, cb);
        } else {
            copyTextToClipboard(text, cb);
        }
    }

    function selectText(text, cb) {
        let range,
            selection;
        if (isOS()) {
            range = document.createRange();
            range.selectNodeContents(textArea);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 999999);

            // Perform action to copy to clipboard
            document.execCommand('copy');
            document.body.removeChild(textArea);

            cb("iOS");
        }
    }

    copy = function (text, cb) {
        createTextArea(text, cb);
    };

    function copyTextToClipboard(text, cb) {
        if (!navigator['clipboard']) {
            fallbackCopyTextToClipboard(text, cb);
            return;
        }
        navigator['clipboard']['writeText'](text).then(function () {
            cb("web");
        }, function () {
            cb("web");
        });
    }

    function fallbackCopyTextToClipboard(text, cb) {
        let textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
            cb("web");
        } catch (err) {
            document.body.removeChild(textArea);
            cb("web");
        }
    }

    return {
        copy: copy
    };

})(window, document, navigator);