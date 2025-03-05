(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"height":"100%","gap":10,"scrollBarColor":"#000000","scrollBarMargin":2,"width":"100%","data":{"defaultLocale":"pt","textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1,"volume":1,"speechOnInfoWindow":false},"name":"Player620","history":{},"locales":{"pt":"locale/pt.txt"},"displayTooltipInTouchScreens":true},"backgroundColor":["#FFFFFF"],"start":"this.init()","id":"rootPlayer","layout":"absolute","children":["this.MainViewer"],"scripts":{"historyGoBack":TDV.Tour.Script.historyGoBack,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"translate":TDV.Tour.Script.translate,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"playAudioList":TDV.Tour.Script.playAudioList,"cloneBindings":TDV.Tour.Script.cloneBindings,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"clone":TDV.Tour.Script.clone,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"isPanorama":TDV.Tour.Script.isPanorama,"openLink":TDV.Tour.Script.openLink,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getOverlays":TDV.Tour.Script.getOverlays,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showPopupImage":TDV.Tour.Script.showPopupImage,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"downloadFile":TDV.Tour.Script.downloadFile,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"initQuiz":TDV.Tour.Script.initQuiz,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setValue":TDV.Tour.Script.setValue,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPixels":TDV.Tour.Script.getPixels,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"resumePlayers":TDV.Tour.Script.resumePlayers,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizShowScore":TDV.Tour.Script.quizShowScore,"init":TDV.Tour.Script.init,"registerKey":TDV.Tour.Script.registerKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizStart":TDV.Tour.Script.quizStart,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"mixObject":TDV.Tour.Script.mixObject,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"historyGoForward":TDV.Tour.Script.historyGoForward,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizFinish":TDV.Tour.Script.quizFinish,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMainViewer":TDV.Tour.Script.getMainViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getKey":TDV.Tour.Script.getKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"disableVR":TDV.Tour.Script.disableVR,"existsKey":TDV.Tour.Script.existsKey,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"createTween":TDV.Tour.Script.createTween,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"enableVR":TDV.Tour.Script.enableVR,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"startMeasurement":TDV.Tour.Script.startMeasurement,"unregisterKey":TDV.Tour.Script.unregisterKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showWindow":TDV.Tour.Script.showWindow,"executeJS":TDV.Tour.Script.executeJS,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"toggleVR":TDV.Tour.Script.toggleVR,"setLocale":TDV.Tour.Script.setLocale},"defaultMenu":["fullscreen","mute","rotation"],"watermark":false,"minHeight":0,"minWidth":0,"class":"Player","backgroundColorRatios":[0],"propagateClick":false,"hash": "fb026b6241fb988078ce5cfbda117c070285525284da8d13e9816a1adf2d3165", "definitions": [{"enterPointingToHorizon":true,"class":"PanoramaCamera","initialPosition":{"pitch":-29.87,"yaw":126.85,"class":"PanoramaCameraPosition"},"id":"panorama_7E20E32D_6603_3718_41D5_B663A447DC17_camera","initialSequence":"this.sequence_704C2FF3_6603_2F08_41D6_2FF668A7BA69"},{"items":[{"media":"this.panorama_7E20E32D_6603_3718_41D5_B663A447DC17","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","camera":"this.panorama_7E20E32D_6603_3718_41D5_B663A447DC17_camera"}],"id":"mainPlayList","class":"PlayList"},{"height":"100%","subtitlesFontFamily":"Arial","subtitlesTextShadowVerticalLength":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingTop":4,"playbackBarBottom":5,"vrPointerSelectionTime":2000,"subtitlesTextShadowHorizontalLength":1,"data":{"name":"Main Viewer"},"toolTipFontSize":"1.11vmin","playbackBarHeight":10,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadWidth":6,"progressBackgroundColorRatios":[0],"progressRight":"33%","playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","surfaceReticleColor":"#FFFFFF","playbackBarRight":0,"toolTipShadowColor":"#333138","playbackBarBackgroundOpacity":1,"playbackBarProgressBorderRadius":0,"progressOpacity":0.7,"toolTipPaddingLeft":6,"progressBarBackgroundColorDirection":"horizontal","subtitlesTop":0,"progressBarBorderColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColorRatios":[0],"subtitlesBottom":50,"subtitlesTextShadowColor":"#000000","toolTipBorderColor":"#767676","vrPointerColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"propagateClick":false,"subtitlesGap":0,"progressBorderColor":"#000000","toolTipTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"progressBackgroundColor":["#000000"],"subtitlesBackgroundColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"toolTipFontColor":"#606060","vrThumbstickRotationStep":20,"toolTipPaddingRight":6,"progressBottom":10,"toolTipBackgroundColor":"#F6F6F6","progressHeight":2,"playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","progressBorderSize":0,"progressBarBorderSize":0,"firstTransitionDuration":0,"subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"id":"MainViewer","playbackBarHeadBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","progressBarBorderRadius":2,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"progressBorderRadius":2,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"toolTipFontFamily":"Arial","progressLeft":"33%","minHeight":50,"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"minWidth":100,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderSize":0,"width":"100%","class":"ViewerArea","toolTipPaddingBottom":4,"playbackBarHeadShadow":true},{"displayPlaybackBar":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","touchControlMode":"drag_rotation","aaEnabled":true,"id":"MainViewerPanoramaPlayer"},{"thumbnailUrl":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_t.webp","label":trans('panorama_7E20E32D_6603_3718_41D5_B663A447DC17.label'),"frames":[{"cube":{"levels":[{"rowCount":6,"width":18432,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_0/{face}/0/{row}_{column}.webp","colCount":36,"height":3072,"tags":"ondemand","class":"TiledImageResourceLevel"},{"rowCount":3,"width":9216,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_0/{face}/1/{row}_{column}.webp","colCount":18,"height":1536,"tags":"ondemand","class":"TiledImageResourceLevel"},{"rowCount":2,"width":6144,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"rowCount":1,"width":3072,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_t.webp","class":"CubicPanoramaFrame"}],"hfov":360,"id":"panorama_7E20E32D_6603_3718_41D5_B663A447DC17","hfovMin":"120%","data":{"label":"BS WAVE"},"vfov":180,"hfovMax":130,"class":"Panorama","overlays":["this.overlay_711B9815_667C_D109_41C2_35359301E616","this.overlay_70FB225D_6603_5139_41CB_CA17F17D19D8","this.overlay_6B71ECF2_6654_8EA2_41D2_A2FA4AC2C674","this.overlay_708A4E55_6603_3108_41BB_8AFDA8F70432","this.overlay_7092599C_6603_D338_41B2_FD2F8717230A","this.overlay_70882155_6603_7308_4182_1CA142662C5F","this.overlay_70964FF7_6603_2F08_41D3_B666CBACD0C5","this.overlay_764EBFC5_666F_8AE7_41CE_25D3631A9E6C"]},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_704C2FF3_6603_2F08_41D6_2FF668A7BA69"},{"data":{"label":"Mandara By Yoo"},"areas":["this.HotspotPanoramaOverlayArea_711A6817_667C_D109_41CC_79AC61F74C01"],"items":[{"pitch":0.25,"yaw":146.37,"distance":50,"image":"this.res_70B50707_6605_3F08_41BA_B84CEA27A8A3","scaleMode":"fit_inside","data":{"label":"Mandara By Yoo"},"hfov":4.5,"class":"HotspotPanoramaOverlayImage","vfov":5.16}],"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_711B9815_667C_D109_41C2_35359301E616","enabledInCardboard":true},{"data":{"label":"Mandara Kauai"},"areas":["this.HotspotPanoramaOverlayArea_70FA725D_6603_5139_4173_67BD2CC4D6EE"],"items":[{"pitch":0.22,"yaw":141.64,"distance":50,"image":"this.res_70B63707_6605_3F08_419D_CBF99A3A4CFA","scaleMode":"fit_inside","data":{"label":"Mandara Kauai"},"hfov":4.39,"class":"HotspotPanoramaOverlayImage","vfov":5.03}],"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_70FB225D_6603_5139_41CB_CA17F17D19D8","enabledInCardboard":true},{"data":{"label":"Poligono"},"areas":["this.HotspotPanoramaOverlayArea_6B64CCF6_6654_8EA5_41D0_536E4579CABF"],"items":[{"pitch":-58.38,"yaw":130.94,"image":{"levels":[{"width":966,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_HS_b3pslnui.webp","height":485,"class":"ImageResourceLevel"}],"class":"ImageResource"},"distance":50,"data":{"label":"Poligono"},"hfov":40.68,"class":"HotspotPanoramaOverlayImage","vfov":21.11}],"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_6B71ECF2_6654_8EA2_41D2_A2FA4AC2C674","enabledInCardboard":true},{"data":{"label":"Tags"},"areas":["this.HotspotPanoramaOverlayArea_70896E56_6603_3108_41D6_20E7B7D1663C"],"items":[{"image":"this.res_70B62707_6605_3F08_41D9_5BFBB026CF9B","data":{"label":"Tags"},"class":"QuadHotspotPanoramaOverlayImage","distance":50,"vertices":[{"pitch":-51.77,"yaw":110.57,"class":"PanoramaPoint"},{"pitch":-51.3,"yaw":155.97,"class":"PanoramaPoint"},{"pitch":-58.51,"yaw":161.23,"class":"PanoramaPoint"},{"pitch":-57.48,"yaw":99.83,"class":"PanoramaPoint"}]}],"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_708A4E55_6603_3108_41BB_8AFDA8F70432","enabledInCardboard":true},{"data":{"label":"Golf Ville"},"areas":["this.HotspotPanoramaOverlayArea_7091699C_6603_D338_41C2_7BFFCC334731"],"items":[{"pitch":-8.02,"yaw":-110.56,"distance":50,"image":"this.res_70B7C707_6605_3F08_41D1_3F97EEADF7B4","scaleMode":"fit_inside","data":{"label":"Golf Ville"},"hfov":8.66,"class":"HotspotPanoramaOverlayImage","vfov":9.93}],"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_7092599C_6603_D338_41B2_FD2F8717230A","enabledInCardboard":true},{"data":{"label":"Porto das Dunas"},"areas":["this.HotspotPanoramaOverlayArea_708F1155_6603_7308_41CE_32A0AA633775"],"items":[{"pitch":0.37,"yaw":-68.21,"distance":50,"image":"this.res_70B7B708_6605_3F18_41C1_40DAF83CCDF3","scaleMode":"fit_inside","data":{"label":"Porto das Dunas"},"hfov":5.6,"class":"HotspotPanoramaOverlayImage","vfov":6.42}],"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_70882155_6603_7308_4182_1CA142662C5F","enabledInCardboard":true},{"data":{"label":"Beach Park"},"areas":["this.HotspotPanoramaOverlayArea_70957FF7_6603_2F08_41D9_8B385DAAB037"],"items":[{"pitch":0.72,"yaw":-38.27,"distance":50,"image":"this.res_70B7A708_6605_3F18_41D4_53D949BF49AC","scaleMode":"fit_inside","data":{"label":"Beach Park"},"hfov":4.88,"class":"HotspotPanoramaOverlayImage","vfov":5.6}],"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_70964FF7_6603_2F08_41D3_B666CBACD0C5","enabledInCardboard":true},{"data":{"label":"Bs Ville"},"areas":["this.HotspotPanoramaOverlayArea_698F403A_666F_F5AD_41D2_011EFD32D739"],"items":[{"pitch":-8.8,"yaw":161.85,"distance":50,"image":"this.res_77438EBE_666C_8AA5_41C1_A2DE48111B89","scaleMode":"fit_inside","data":{"label":"Bs Ville"},"hfov":10.5,"class":"HotspotPanoramaOverlayImage","vfov":12.11}],"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_764EBFC5_666F_8AE7_41CE_25D3631A9E6C","enabledInCardboard":true},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_711A6817_667C_D109_41CC_79AC61F74C01","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"width":144,"url":"media/res_70B50707_6605_3F08_41BA_B84CEA27A8A3_0.webp","height":166,"class":"ImageResourceLevel"}],"id":"res_70B50707_6605_3F08_41BA_B84CEA27A8A3","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_70FA725D_6603_5139_4173_67BD2CC4D6EE","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"width":141,"url":"media/res_70B63707_6605_3F08_419D_CBF99A3A4CFA_0.webp","height":162,"class":"ImageResourceLevel"}],"id":"res_70B63707_6605_3F08_419D_CBF99A3A4CFA","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_6B64CCF6_6654_8EA5_41D0_536E4579CABF","mapColor":"image","class":"HotspotPanoramaOverlayArea"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_70896E56_6603_3108_41D6_20E7B7D1663C","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"width":591,"url":"media/res_70B62707_6605_3F08_41D9_5BFBB026CF9B_0.webp","height":142,"class":"ImageResourceLevel"}],"id":"res_70B62707_6605_3F08_41D9_5BFBB026CF9B","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_7091699C_6603_D338_41C2_7BFFCC334731","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"width":278,"url":"media/res_70B7C707_6605_3F08_41D1_3F97EEADF7B4_0.webp","height":319,"class":"ImageResourceLevel"}],"id":"res_70B7C707_6605_3F08_41D1_3F97EEADF7B4","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_708F1155_6603_7308_41CE_32A0AA633775","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"width":179,"url":"media/res_70B7B708_6605_3F18_41C1_40DAF83CCDF3_0.webp","height":206,"class":"ImageResourceLevel"}],"id":"res_70B7B708_6605_3F18_41C1_40DAF83CCDF3","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_70957FF7_6603_2F08_41D9_8B385DAAB037","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"width":156,"url":"media/res_70B7A708_6605_3F18_41D4_53D949BF49AC_0.webp","height":180,"class":"ImageResourceLevel"}],"id":"res_70B7A708_6605_3F18_41D4_53D949BF49AC","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_698F403A_666F_F5AD_41D2_011EFD32D739","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"width":337,"url":"media/res_77438EBE_666C_8AA5_41C1_A2DE48111B89_0.webp","height":390,"class":"ImageResourceLevel"}],"id":"res_77438EBE_666C_8AA5_41C1_A2DE48111B89","class":"ImageResource"}]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Wed Mar 5 2025