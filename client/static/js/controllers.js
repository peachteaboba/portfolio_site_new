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

    // Vertical Scroll
    // ---------------
    // ---------------
    $scope.offsetY = 0;



    // Retrieve site metrics
    // ---------------------
    // ---------------------
    function fetchSiteMetrics() {
        MetricFactory.index(function (data) {
            if (data.data && data.data.length > 0) {
                $scope.metrics = data.data[0];
                // console.log($scope.metrics);
                goToTop();
            }
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
    };

    $scope.bitworthSite = function () {
        $window.open('https://bitworth.app');
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


















    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------
    // NEW HOTNESS ---------------------


    $scope.aniSkill = 0;
    $scope.aniEdu = 0;
    $scope.aniWordd = 0;




    $scope.goToSomewhere = function (w) {
        var top;
        var duration = 500; //milliseconds
        if (w == 'top') {

            top = 750;
            //Scroll to the exact position
            $document.scrollTop(top, duration).then(function () {
                // console && console.log('You just scrolled to the bottom!');
            });


            $scope.where = 'bottom';
        }
        if (w == 'bottom') {

            top = 0;
            //Scroll to the exact position
            $document.scrollTop(top, duration).then(function () {
                // console && console.log('You just scrolled to the top!');
            });

            $scope.where = 'top';
        }
    };


    $scope.sub = function () {
        MetricFactory.incSub(function (data) {
            $scope.metrics = data;
        });
        $window.open('//subman.io');
    };

    $scope.ham = function () {
        MetricFactory.incHam(function (data) {
            $scope.metrics = data;
        });
        $window.open('//hamster.gold');
    };


    // Vertical distance from the top of the page to the top of the edu-wrapper div
    var eduDivTop = angular.element(document.querySelector('#edu')).prop('offsetTop');
    var skillDivTop = angular.element(document.querySelector('#skill')).prop('offsetTop');
    var worddDivTop = angular.element(document.querySelector('#wordd')).prop('offsetTop');

    // Initialize variable to hold animation trigger point
    var eduTrigger;
    var skillTrigger;
    var worddTrigger;

    // Change scope variable on scroll -------------------------------------
    $timeout(function () {

        angular.element($window).on('scroll', function () {

            $scope.offsetY = this.pageYOffset;

            if (this.pageYOffset >= 25) {
                $scope.where = 'bottom';
                // console.log('Scrolled below header.');
            } else {
                $scope.where = 'top';
                // console.log('Header is in view.');
            }


            // Animate wordd section ------------------------------------
            worddTrigger = worddDivTop - ($window.innerHeight / 2);
            if (this.pageYOffset >= worddTrigger) {
                if ($scope.aniWordd != 1) {
                    $scope.aniWordd = 1;
                }
            } // ------------------------------ end Animate Wordd Section


            // Animate skill section ------------------------------------
            skillTrigger = skillDivTop - ($window.innerHeight / 3);
            if (this.pageYOffset >= skillTrigger) {
                if ($scope.aniSkill != 1) {
                    $scope.aniSkill = 1;
                    // console.log('skill');
                }
            } // ------------------------------ end Animate Skill Section


            // Animate edu section --------------------------------------
            eduTrigger = eduDivTop - ($window.innerHeight / 2);
            // Animate education section
            if (this.pageYOffset >= eduTrigger) {
                if ($scope.aniEdu != 1) {
                    $scope.aniEdu = 1;
                }
            } // -------------------------------- end Animate Edu Section


            $scope.$apply();
        });


    }, 500);
    // ---------------------------------------------------------------------


    $scope.animateEdu = function () {
        $scope.aniEdu = 1;
        $timeout(function () {
            $scope.aniEdu = 0;
        }, 1000);

    };




    // $scope.gotoBottom = function() {
    //     // set the location.hash to the id of
    //     // the element you wish to scroll to.
    //     $location.hash('bottom');
    //
    //     // call $anchorScroll()
    //     $anchorScroll();
    // };


    // Initialize scope variables --------------------------------------------
    $scope.showSum = 0;
    $scope.copied = 0;
    $scope.subHover = 0;
    $scope.hamHover = 0;


    $scope.showSumToggle = function () {


        if ($scope.showSum == 0) {
            $scope.showSum = 1;
            MetricFactory.incShow(function (data) {
                $scope.metrics = data;
            });


        } else {
            $scope.showSum = 0;
        }

    };


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

}]);


// NEW HOTNESS ---------------------
// NEW HOTNESS ---------------------
// NEW HOTNESS ---------------------
// NEW HOTNESS ---------------------
// NEW HOTNESS ---------------------

window.Clipboard = (function (window, document, navigator) {
    let textArea,
        copy;

    function isOS() {
        // console.log(navigator.userAgent);
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
            // console.log('Async: Copying to clipboard was successful! ---> ' + text);
            cb("web");
        }, function (err) {
            // console.error('Async: Could not copy text: ', err);
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
            let successful = document.execCommand('copy');
            let msg = successful ? 'successful' : 'unsuccessful';
            // console.log('Fallback: Copying text command was ' + msg);
            cb("web");
            document.body.removeChild(textArea);
        } catch (err) {
            // console.error('Fallback: Oops, unable to copy', err);
            cb("web");
            document.body.removeChild(textArea);
        }
    }

    return {
        copy: copy
    };
})(window, document, navigator);