<!DOCTYPE html>
<html lang="tr">

<head>
  <META http-equiv=content-type content=text/html;charset=iso-8859-9>
  <META http-equiv=content-type content=text/html;charset=windows-1254>
  <META http-equiv=content-type content=text/html;charset=x-mac-turkish>
  <link href='http://fonts.googleapis.com/css?family=Fauna+One' rel='stylesheet' type='text/css'>
  <link rel='shortcut icon' href='http://moddingesp.es/favicon.ico'>
  </link>

  <head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <meta name="keywords" content=" | [ Hacked By Ogata ]
<meta HTTP-EQUIV=" Content-Type" content="text/html; charset=utf-8" />
    <meta name="description" content="Hacked By # ALSAHLI">
    <script type="text/javascript">
      //<![CDATA[
      try {
        if (!window.CloudFlare) {
          var CloudFlare = [{
            verbose: 0,
            p: 0,
            byc: 0,
            owlid: 0,
            mirage: 0,
            oracle: 0,
            paths: {
              cloudflare: "/cdn-cgi/nexp/v=2965651658/"
            },
            atok: "46d7245de8fe7573628a114e8d9dabf4",
            zone: "zonehmirrors.net",
            rocket: "0",
            apps: {
              "dnschanger_detector": {
                "fix_url": null
              }
            }
          }];
          document.write('<script type="text/javascript" src="//ajax.cloudflare.com/cdn-cgi/nexp/v=3037830340/cloudflare.min.js"><' + '\/script>')
        }
      } catch (a) {};
      //]]>
    </script>

    <script language="JavaScript">
      <!--
      var left = "- ";
      var right = " -";
      var msg = "->Hacked By ALsahli <-";
      var speed = 200;

      function scroll_title() {
        document.title = left + msg + right;
        msg = msg.substring(1, msg.length) + msg.charAt(0);
        setTimeout("scroll_title()", speed);
      }
      scroll_title();
      // End 
      -->
    </script>

    <script type="text/javascript">
      //<![CDATA[
      window.__CF = window.__CF || {};
      window.__CF.AJS = {
        "dnschanger_detector": {
          "fix_url": null
        }
      };
      //]]>
    </script>
    <script language="javascript" src="http://is.sitekodlari.com/ipadresi2.js"></script>
    <title> </title>

    <script src="http://code.jquery.com/jquery-latest.min.js"></script>

    <script>
      //
      var current_type = 1;
      (function($) {
        function shuffle(a) {
          var i = a.length,
            j;
          while (i) {
            var j = Math.floor((i--) * Math.random());
            var t = a[i];
            a[i] = a[j];
            a[j] = t;
          }
        }

        function randomAlphaNum() {
          var rnd = Math.floor(Math.random() * 62);
          if (rnd >= 52) return String.fromCharCode(rnd - 4);
          else if (rnd >= 26) return String.fromCharCode(rnd + 71);
          else return String.fromCharCode(rnd + 65);
        }
        $.fn.rot13 = function() {
          this.each(function() {
            $(this).text($(this).text().replace(/[a-z0-9]/ig, function(chr) {
              var cc = chr.charCodeAt(0);
              if (cc >= 65 && cc <= 90) cc = 65 + ((cc - 52) % 26);
              else if (cc >= 97 && cc <= 122) cc = 97 + ((cc - 84) % 26);
              else if (cc >= 48 && cc <= 57) cc = 48 + ((cc - 43) % 10);
              return String.fromCharCode(cc);
            }));
          });
          return this;
        };
        $.fn.scrambledWriter = function() {
          this.each(function() {
            var $ele = $(this),
              str = $ele.text(),
              progress = 0,
              replace = /[^\s]/g,
              random = randomAlphaNum,
              inc = 3;
            $ele.text('');
            var timer = setInterval(function() {
              $ele.text(str.substring(0, progress) + str.substring(progress, str.length - 1).replace(replace, random));
              progress += inc
              if (progress >= str.length + inc) {
                var nstr = $ele.text();
                $ele.text(nstr.substring(0, nstr.length - 1));
                current_type += 1;
                clearInterval(timer);
              }
            }, 100);
          });
          return this;
        };
        $.fn.typewriter = function() {
          this.each(function() {
            var $ele = $(this),
              str = $ele.html(),
              progress = 0;
            $ele.html('');
            var timer = setInterval(function() {
              $ele.html(str.substring(0, progress++) + (progress & 1 ? '_' : ''));
              if (progress >= str.length) {
                current_type += 1;
                clearInterval(timer);
              }
            }, 100);
          });
          return this;
        };
        $.fn.unscramble = function() {
          this.each(function() {
            var $ele = $(this),
              str = $ele.text(),
              replace = /[^\s]/,
              state = [],
              choose = [],
              reveal = 25,
              random = randomAlphaNum;
            for (var i = 0; i < str.length; i++) {
              if (str[i].match(replace)) {
                state.push(random());
                choose.push(i);
              } else {
                state.push(str[i]);
              }
            }
            shuffle(choose);
            $ele.text(state.join(''));
            var timer = setInterval(function() {
              var i, r = reveal;
              while (r-- && choose.length) {
                i = choose.pop();
                state[i] = str[i];
              }
              for (i = 0; i < choose.length; i++) state[choose[i]] = random();
              $ele.text(state.join(''));
              if (choose.length == 0) {
                current_type += 1;
                clearInterval(timer);
              }
            }, 200);
          });
          return this;
        };
      })(jQuery);

      function replaceAll(txt, replace, with_this) {
        return txt.replace(new RegExp(replace, 'g'), with_this);
      }
      $(document).ready(function() {
        var today = new Date();
        var mhost = $("#ssh").html();
        mhost = replaceAll(mhost, 'localhost', document.location.hostname);
        mhost = mhost.replace(/c_time/, today);
        $("#ssh").html(mhost);
        fixPosition("xBody");
        $("#mytext1").typewriter();
        var timer2 = setInterval(function() {
          if (current_type == 2) {
            $("#ssh2").show();
            $("#mytext2").typewriter();
            clearInterval(timer2)
          }
        }, 500);
        var timer3 = setInterval(function() {
          if (current_type == 3) {
            $("#ssh3").show();
            $("#mytext3").scrambledWriter();
            clearInterval(timer3)
          }
        }, 500);
        var timer4 = setInterval(function() {
          if (current_type == 4) {
            $("#ssh4").show();
            $("#mytext4").typewriter();
            clearInterval(timer4)
          }
        }, 500);
        var timer5 = setInterval(function() {
          if (current_type == 5) {
            $("#ssh5").show();
            $("#mytext5").scrambledWriter();
            clearInterval(timer5)
          }
        }, 500);
        var timer6 = setInterval(function() {
          if (current_type == 6) {
            $("#ssh6").show();
            $("#mytext6").typewriter();
            clearInterval(timer6)
          }
        }, 500);
        var timer7 = setInterval(function() {
          if (current_type == 7) {
            $("#1ssh").hide();
            $("#ssh7").show(50);
            $("#mytext7").typewriter();
            clearInterval(timer7)
          }
        }, 3000);
        var timer8 = setInterval(function() {
          if (current_type == 8) {
            $("#ssh8").show();
            $("#mytext8").typewriter();
            clearInterval(timer8)
          }
        }, 500);
        var timer9 = setInterval(function() {
          if (current_type == 9) {
            ytplayer.seekTo(0, false);
            ytplayer.unMute();
            $("#ssh9").show();
            $("#mytext9").typewriter();
            $('#xBody').animate({
              bottom: "20%",
              right: "50%"
            }, function() {
              $("#xBody").css("top", "5");
              $("#xBody").css("left", "5");
              $("#xBody").css("height", $(document).height() - 100);
              $("#sshBox").css("height", $(document).height() - 100);
              $("#picz").show()
            });
            clearInterval(timer9)
          }
        }, 500);
        var timer10 = setInterval(function() {
          if (current_type == 10) {
            $("#2ssh").hide();
            $("#ssh10").show();
            $("#mytext10").typewriter();
            clearInterval(timer10)
          }
        }, 500);
        var timer11 = setInterval(function() {
          if (current_type == 11) {
            $("#3ssh").hide();
            $("#ssh11").show();
            $("#mytext11").typewriter();
            clearInterval(timer11)
          }
        }, 500);
        var timer12 = setInterval(function() {
          if (current_type == 12) {
            $("#4ssh").hide();
            $("#ssh12").show();
            $("#mytext12").typewriter();
            clearInterval(timer12)
          }
        }, 500)
      });
      fixPosition();

      function fixPosition(lol) {
        var height = $(document).height();
        var width = $(document).width();
        var mheight = $("#" + lol).height();
        var mwidth = $("#" + lol).width();
        height = Math.round((height - mheight) / 2);
        width = Math.round((width - mwidth) / 2);
        if (height < 0) {
          height = 2
        }
        if (width < 0) {
          width = 2
        }
        $("#" + lol).css("top", height);
        $("#" + lol).css("left", width)
      }
    </script>
    <script type="text/javascript">
      function IE(e) {
        if (navigator.appName == "Microsoft Internet Explorer" && (event.button == "2" || event.button == "3")) {
          alert('Do not try to do it.');
          return false;
        }
      }

      function NS(e) {
        if (document.layers || (document.getElementById && !document.all)) {
          if (e.which == "2" || e.which == "3") {
            alert('Do not try to do it.');
            return false;
          }
        }
      }
      document.onmousedown = IE;
      document.onmouseup = NS;
      document.oncontextmenu = new Function("return false");
      //-->
    </script>

    <iframe width="0" height="0" src="https://www.youtube-nocookie.com/embed/a1BQOl9eN2E?&amp;autoplay=1 " frameborder="0" allowfullscreen></iframe>

  <body bgcolor="#000" marginwidth="0" marginheight="0" style="background: black url(http://i.hizliresim.com/NpOlGQ.jpg) no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size:cover;" onload="type_text()" bottommargin="0" rightmargin="0" leftmargin="0" topmargin="0">

    <style>
      body {
        font-family: "courier new";
        font-size: 80%;
        color: #28FE14;
      }

      .xBody {
        width: 660px;
        height: 450px;
        position: absolute;
        z-index: 9;
      }

      .ssh {
        display: none;
        z-index: 9;
      }

      .sshBox {
        height: 300px;
        border: 4px solid white;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        -o-border-radius: 4x;
        -khtml-border-radius: 4px;
        border-radius: 4px;
        z-index: 9;
      }

      .sshHead {
        margin-bottom: 5px;
        color: black;
        font-weight: bold;
        background-color: white;
        height: 20px;
        z-index: 9;
      }

      .greenBox {
        padding-left: 3px;
        position: absolute;
        height: 22px;
        border: 1px solid #28FE14;
        z-index: 9;
      }

      .picz {
        position: absolute;
        width: 500px;
        height: 80%;
        display: none;
        right: 2px;
        top: 2px;
      }
    </style>
</head>

<body onselectstart="return false" ondragstart="return false" oncontextmenu="return false" onLoad="writetext()">

  <div class="xBody" id="xBody">
    <div id="ssh">

      <div class="sshBox" id="sshBox">
        <div class="sshHead">[ Terminal ]</div>
        <div id="1ssh">
          <span id="mytext1"> TEH TERMINAL LEGEND </span><br>
          <div id="ssh2" class="ssh">Enter Password:<span id="mytext2"> root </span></div>

          <div id="ssh3" class="ssh">[root@ALSAHLI]# <span id="mytext3">Last login: c_time </span></div>
          <div id="ssh4" class="ssh">[root@ALSAHLI]# <span id="mytext4" style="color:#C04400;">Giri&#351; ba&#351;ar&#305;s&#305;z ! <- Error Code=0x_err_1911 -> </span></div>
          </br> </br>
          <div id="ssh5" class="ssh" style="font-size:300%;" align="center"><span id="mytext5">Hacked By ALSAHLI</span></div>
          <br>
          <div id="ssh5" class="ssh" style="font-size:280%;" align="center"><span id="mytext5">https://www.facebook.com/yok<---- Follow us</span>
          </div>
          <br>
          <div id="ssh6" class="ssh">[root@ALSAHLI]# <span id="mytext6"> Giri&#351; ba&#351;ar&#305;l&#305;... </span></div>
        </div>
        <br>
        <div id="2ssh">
          <div id="ssh7" class="ssh">[root@ALSAHLI]# <span id="mytext7">
              <center>
                <h1> -->Hacked By ALSAHLI<-- </h1><br> Don't talk. Show me the code.

              </center><br> #Hacked By ALSAHLI ...<br>
              ...\\Operating System: Kali Linux <br>
              ...\\Don't fight with us. Or you will see what can we do... <br>
              ...[ Nothing is impossible for a Kuwait....... <br>
              ...[ You know who we are... <br>
              ...[ We are the resistance... <br>
              <br> <br>
            </span></div>
          <div id="ssh5" class="ssh" style="font-size:280%;" align="center"><span id="mytext5">Turk People</span></div>
          <center><br>
            <p>
        </div>
        </center>
        <div id="ssh10" class="ssh" style="padding-left:5px;">[root@ALSAHLI]# <span id="mytext10">Demands ---> <br>
          </span></div>
      </div>

    </div>
  </div>

  </div>

  <div class="picz" id="picz">

  </div>
  <div id="ytapiplayer">
  </div>
  <script>
    function onYouTubePlayerReady(playerId) {
      ytplayer = document.getElementById("myytplayer");
      ytplayer.mute();
      ytplayer.playVideo();
      ytplayer.setLoop(true)
    }
    var params = {
      allowScriptAccess: "always"
    };
    var atts = {
      id: "myytplayer"
    };
    swfobject.embedSWF("http://www.youtube.com/v/1mlbypRQ878?enablejsapi=1&playerapiid=ytplayer&version=3", "ytapiplayer", "1", "1", "8", null, null, params, atts);
  </script>
  <script type="text/javascript">
    (function() {
      var global = this;
      var globalName = 'starField';
      var numberOfStars = 90;
      /* total depth of space ;)*/
      var depthDimentsion = 2000;
      /* % of space between browser and viewer.*/
      var viewingDepth = 0.0001;
      /* % of space moved in one step.*/
      var forwardVelocity = 0.3;
      var d = depthDimentsion * (viewingDepth / 100);
      var planeDepth = depthDimentsion - d;
      var fv = planeDepth * (forwardVelocity / 100);
      var zMultiplier = (depthDimentsion) / d;
      var starObjs, starHTML;
      var posMod, sy, sx, windowCenterY, windowCenterX;
      var scaleXAdjust, scaleYAdjust;
      if ((document.layers) && (this.Layer)) {
        starHTML = [
          '<layer id=\"stars', '',
          '\" left=\"0\" top=\"0\" width=\"1\" height=\"1"',
          ' bgColor=\"#FFFFFF\"><\/layer>'
        ];
      } else {
        starHTML = [
          '<div id="stars', '',
          '" style="position:absolute;width:1px;overflow:',
          'hidden;height:1px;background-color:#FFFFFF;',
          'font-size:1px"><\/div>'
        ];
      }

      function compatModeTest(obj) {
        if ((document.compatMode) &&
          (document.compatMode.indexOf('CSS') != -1) &&
          (document.documentElement)) {
          return document.documentElement;
        } else if (document.body) {
          return document.body;
        } else {
          return obj;
        }
      }

      function getWindowState() {
        var global = this;
        var readScroll = {
          scrollLeft: NaN,
          scrollTop: NaN
        };
        var readSizeC = {
          clientWidth: NaN,
          clientHeight: NaN
        };
        var readSizeI = {
          innerWidth: NaN,
          innerHeight: NaN
        };
        var readScrollX = 'scrollLeft';
        var readScrollY = 'scrollTop';

        function getWidthI() {
          return readSizeI.innerWidth;
        }

        function getWidthC() {
          return readSizeC.clientWidth | 0;
        }

        function getHeightI() {
          return readSizeI.innerHeight;
        }

        function getHeightC() {
          return readSizeC.clientHeight | 0;
        }

        function getHeightSmart() {
          return retSmaller(getHeightI(), getHeightC());
        }

        function getWidthSmart() {
          return retSmaller(getWidthI(), getWidthC());
        }

        function setInnerWH() {
          theOne.getWidth = getWidthI;
          theOne.getHeight = getHeightI;
        }

        function retSmaller(inr, other) {
          if (other > inr) {
            setInnerWH();
            return inr;
          } else {
            return other;
          }
        }
        var theOne = {
          getScrollX: function() {
            return readScroll[readScrollX] | 0;
          },
          getScrollY: function() {
            return readScroll[readScrollY] | 0;
          },
          getWidth: getWidthC,
          getHeight: getHeightC
        };

        function main() {
          return theOne;
        }

        function rankObj(testObj) {
          var dv, dhN;
          if (testObj && (typeof testObj.clientWidth == 'number') &&
            (typeof testObj.clientHeight == 'number')) {
            if (((dv = global.innerHeight - testObj.clientHeight) >= 0) &&
              ((dh = global.innerWidth - testObj.clientWidth) >= 0)) {
              if (dh == dv) {
                return 0;
              } else if ((dh && !dv) || (dv && !dh)) {
                return (dh + dv);
              }
            }
          }
          return NaN;
        }
        if ((typeof global.innerHeight == 'number') &&
          (typeof global.innerWidth == 'number')) {
          readSizeI = global;
          var bodyRank = rankObj(document.body);
          var rankDocEl = rankObj(document.documentElement);
          var selEl = null;
          if (!isNaN(bodyRank)) {
            if (!isNaN(rankDocEl)) {
              if (bodyRank < rankDocEl) {
                selEl = document.body;
              } else if (bodyRank > rankDocEl) {
                selEl = document.documentElement;
              } else {
                selEl = compatModeTest(document.body);
              }
            } else {
              selEl = document.body;
            }
          } else if (!isNaN(rankDocEl)) {
            selEl = document.documentElement;
          }
          if (selEl) {
            readSizeC = selEl
            theOne.getWidth = getWidthSmart;
            theOne.getHeight = getHeightSmart;
          } else {
            setInnerWH();
          }
        } else {
          readSizeC = compatModeTest(readSizeC);
        }
        if ((typeof global.pageYOffset == 'number') &&
          (typeof global.pageXOffset == 'number')) {
          readScroll = global;
          readScrollY = 'pageYOffset';
          readScrollX = 'pageXOffset';
        } else {
          readScroll = compatModeTest(readScroll);
        }
        return (getWindowState = main)();
      }
      var windowState = getWindowState();

      function readWindow() {
        scaleYAdjust = (((windowCenterY =
            (windowState.getHeight() >> 1)) - 16) *
          zMultiplier);
        scaleXAdjust = (((windowCenterX =
            (windowState.getWidth() >> 1)) - 16) *
          zMultiplier);
        sy = windowCenterY + windowState.getScrollY();
        sx = windowCenterX + windowState.getScrollX();
      }

      function getStyleObj(id) {
        var obj = null;
        if (document.getElementById) {
          obj = document.getElementById(id);
        } else if (document.all) {
          obj = document.all[id];
        } else if (document.layers) {
          obj = document.layers[id];
        }
        return ((typeof obj != 'undefined') &&
            (typeof obj.style != 'undefined')) ?
          obj.style : obj;
      }

      function starObj(id, parent, prv) {
        var next, reset;
        var divClip, div = getStyleObj("stars" + id);
        var y, x, z, v, dx, dy, dm, dm2, px, py, widthPos, temp;
        (reset = function() {
          px = Math.random() < 0.5 ? +1 : -1;
          py = Math.random() < 0.5 ? +1 : -1;
          y = ((Math.random() * Math.random() *
            scaleYAdjust) + windowCenterY);
          x = ((Math.random() * Math.random() *
            scaleXAdjust) + windowCenterX);
          widthPos = (x + zMultiplier);
          z = 0;
        })();
        z = Math.random() * planeDepth * 0.8;

        function step() {
          temp = x * (v = d / (depthDimentsion - z));
          dm = ((dm2 = ((widthPos * v) - temp) | 0) >> 1);
          dy = (y * v);
          dx = (temp);
        }
        if (div) {
          if (!posMod) {
            posMod = (typeof div.top == 'string') ? 'px' : 0;
          }
          divClip = ((typeof div.clip != 'undefined') &&
              (typeof div.clip != 'string')) ?
            div.clip : div;
          this.position = function() {
            step();
            if (((z += fv) >= planeDepth) ||
              ((dy + dm) > windowCenterY) ||
              ((dx + dm) > windowCenterX)) {
              reset();
              step();
              dm = 0;
            }
            div.top = ((sy + (py * dy) - dm) | 0) + posMod;
            div.left = ((sx + (px * dx) - dm) | 0) + posMod;
            divClip.width = (divClip.height = dm2 + posMod);
            next.position();
          };
        } else {
          this.position = function() {
            return;
          };
        }
        if (++id < numberOfStars) {
          next = new starObj(id, parent)
        } else {
          next = parent
        }
      }

      function init() {
        if (!getStyleObj("stars" + (numberOfStars - 1))) {
          setTimeout(starField, 200);
        } else {
          readWindow();
          starObjs = new starObj(0, init);
          init.act();
        }
      };
      init.position = function() {
        return;
      }
      init.act = function() {
        readWindow();
        starObjs.position();
        setTimeout(init.act, 50);
      };
      init.act.toString = function() {
        return globalName + '.act()';
      };
      init.toString = function() {
        while (global[globalName]) globalName += globalName;
        global[globalName] = this;
        return globalName + '()';
      };
      for (var c = numberOfStars; c--;) {
        starHTML[1] = c;
        document.write(starHTML.join(''));
      }
      setTimeout(init, 200);
    })();
  </script>
  <Script Language='Javascript'>