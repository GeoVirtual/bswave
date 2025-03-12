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
var script = {"height":"100%","gap":10,"scripts":{"playAudioList":TDV.Tour.Script.playAudioList,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"startMeasurement":TDV.Tour.Script.startMeasurement,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"clone":TDV.Tour.Script.clone,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"openLink":TDV.Tour.Script.openLink,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"resumePlayers":TDV.Tour.Script.resumePlayers,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPixels":TDV.Tour.Script.getPixels,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"isPanorama":TDV.Tour.Script.isPanorama,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"shareSocial":TDV.Tour.Script.shareSocial,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"enableVR":TDV.Tour.Script.enableVR,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getComponentByName":TDV.Tour.Script.getComponentByName,"initAnalytics":TDV.Tour.Script.initAnalytics,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"toggleVR":TDV.Tour.Script.toggleVR,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setValue":TDV.Tour.Script.setValue,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"init":TDV.Tour.Script.init,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"existsKey":TDV.Tour.Script.existsKey,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"historyGoForward":TDV.Tour.Script.historyGoForward,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"disableVR":TDV.Tour.Script.disableVR,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"showWindow":TDV.Tour.Script.showWindow,"executeJS":TDV.Tour.Script.executeJS,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizShowScore":TDV.Tour.Script.quizShowScore,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getMediaByName":TDV.Tour.Script.getMediaByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getKey":TDV.Tour.Script.getKey,"initQuiz":TDV.Tour.Script.initQuiz,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"mixObject":TDV.Tour.Script.mixObject,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"registerKey":TDV.Tour.Script.registerKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getOverlays":TDV.Tour.Script.getOverlays,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizStart":TDV.Tour.Script.quizStart,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizFinish":TDV.Tour.Script.quizFinish,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"downloadFile":TDV.Tour.Script.downloadFile,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"translate":TDV.Tour.Script.translate,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"createTween":TDV.Tour.Script.createTween,"setLocale":TDV.Tour.Script.setLocale,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"historyGoBack":TDV.Tour.Script.historyGoBack},"hash": "8c113f5b79bdabcc55bd35d155e854720b6b7505515bd94c2dee7fcef8ba5535", "definitions": [{"hfovMin":"120%","label":trans('panorama_7E20E32D_6603_3718_41D5_B663A447DC17.label'),"id":"panorama_7E20E32D_6603_3718_41D5_B663A447DC17","overlays":["this.overlay_711B9815_667C_D109_41C2_35359301E616","this.overlay_70FB225D_6603_5139_41CB_CA17F17D19D8","this.overlay_6B71ECF2_6654_8EA2_41D2_A2FA4AC2C674","this.overlay_708A4E55_6603_3108_41BB_8AFDA8F70432","this.overlay_92481566_827D_47D9_41CD_564E837869EF","this.overlay_70964FF7_6603_2F08_41D3_B666CBACD0C5","this.overlay_764EBFC5_666F_8AE7_41CE_25D3631A9E6C","this.overlay_889AD59C_87C2_2BD3_41CD_B47F1E2CF9AF"],"data":{"label":"BS WAVE"},"class":"Panorama","frames":[{"cube":{"class":"ImageResource","levels":[{"tags":"ondemand","rowCount":6,"width":18432,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_0/{face}/0/{row}_{column}.webp","height":3072,"colCount":36,"class":"TiledImageResourceLevel"},{"tags":"ondemand","rowCount":3,"width":9216,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_0/{face}/1/{row}_{column}.webp","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"tags":"ondemand","rowCount":2,"width":6144,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_0/{face}/2/{row}_{column}.webp","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"rowCount":1,"width":3072,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_0/{face}/3/{row}_{column}.webp","height":512,"colCount":6,"class":"TiledImageResourceLevel"}]},"thumbnailUrl":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_t.webp","class":"CubicPanoramaFrame"}],"hfovMax":130,"hfov":360,"thumbnailUrl":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_t.webp","vfov":180},{"initialPosition":{"pitch":-25.15,"class":"PanoramaCameraPosition","yaw":127.63},"initialSequence":"this.sequence_704C2FF3_6603_2F08_41D6_2FF668A7BA69","enterPointingToHorizon":true,"class":"PanoramaCamera","id":"panorama_7E20E32D_6603_3718_41D5_B663A447DC17_camera"},{"id":"mainPlayList","items":[{"camera":"this.panorama_7E20E32D_6603_3718_41D5_B663A447DC17_camera","media":"this.panorama_7E20E32D_6603_3718_41D5_B663A447DC17","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"subtitlesTextShadowHorizontalLength":1,"width":"100%","toolTipPaddingTop":4,"subtitlesTextShadowOpacity":1,"minHeight":50,"playbackBarHeight":10,"subtitlesBorderColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"minWidth":100,"toolTipFontSize":"1.11vmin","surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","toolTipFontFamily":"Arial","playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"toolTipFontColor":"#606060","toolTipPaddingBottom":4,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"playbackBarHeadShadowOpacity":0.7,"progressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"progressRight":"33%","vrThumbstickRotationStep":20,"progressOpacity":0.7,"playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColorDirection":"horizontal","subtitlesFontFamily":"Arial","subtitlesBottom":50,"progressBarBorderColor":"#000000","firstTransitionDuration":0,"progressBarBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","toolTipPaddingRight":6,"playbackBarProgressBorderColor":"#000000","subtitlesTop":0,"vrPointerColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"playbackBarHeadBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"progressBorderColor":"#000000","class":"ViewerArea","progressBarBackgroundColor":["#3399FF"],"id":"MainViewer","toolTipTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"toolTipPaddingLeft":6,"toolTipBorderColor":"#767676","playbackBarHeadHeight":15,"toolTipShadowColor":"#333138","playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundColor":["#000000"],"progressHeight":2,"progressBorderSize":0,"subtitlesFontSize":"3vmin","progressBottom":10,"playbackBarBorderSize":0,"playbackBarHeadBorderColor":"#000000","playbackBarHeadShadow":true,"progressBarBorderSize":0,"playbackBarHeadBorderSize":0,"progressBarBorderRadius":2,"subtitlesBackgroundColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowColor":"#000000","playbackBarLeft":0,"subtitlesTextShadowColor":"#000000","subtitlesGap":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"propagateClick":false,"playbackBarBottom":5,"surfaceReticleColor":"#FFFFFF","progressBorderRadius":2,"subtitlesBackgroundOpacity":0.2,"vrPointerSelectionColor":"#FF6600","progressLeft":"33%","height":"100%","vrPointerSelectionTime":2000},{"aaEnabled":true,"arrowKeysAction":"translate","viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"keepModel3DLoadedWithoutLocation":true,"class":"PanoramaPlayer"},{"data":{"label":"Mandara By Yoo"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_711A6817_667C_D109_41CC_79AC61F74C01"],"items":[{"pitch":1.84,"yaw":149.46,"distance":50,"image":"this.res_70B50707_6605_3F08_41BA_B84CEA27A8A3","scaleMode":"fit_inside","hfov":7.16,"vfov":8.22,"data":{"label":"Mandara By Yoo"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_711B9815_667C_D109_41C2_35359301E616","useHandCursor":true},{"data":{"label":"Mandara Kauai"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_70FA725D_6603_5139_4173_67BD2CC4D6EE"],"items":[{"pitch":1.82,"yaw":141.98,"distance":50,"image":"this.res_70B63707_6605_3F08_419D_CBF99A3A4CFA","scaleMode":"fit_inside","hfov":7.12,"vfov":8.17,"data":{"label":"Mandara Kauai"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_70FB225D_6603_5139_41CB_CA17F17D19D8","useHandCursor":true},{"data":{"label":"Poligono"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6B64CCF6_6654_8EA5_41D0_536E4579CABF"],"items":[{"pitch":-58.38,"vfov":21.11,"yaw":130.94,"hfov":40.68,"distance":50,"image":{"levels":[{"width":966,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_HS_b3pslnui.webp","height":485,"class":"ImageResourceLevel"}],"class":"ImageResource"},"data":{"label":"Poligono"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_6B71ECF2_6654_8EA2_41D2_A2FA4AC2C674","useHandCursor":true},{"data":{"label":"Tags"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_70896E56_6603_3108_41D6_20E7B7D1663C"],"items":[{"image":"this.res_70B62707_6605_3F08_41D9_5BFBB026CF9B","data":{"label":"Tags"},"vertices":[{"pitch":-51.77,"class":"PanoramaPoint","yaw":110.57},{"pitch":-51.3,"class":"PanoramaPoint","yaw":155.97},{"pitch":-58.51,"class":"PanoramaPoint","yaw":161.23},{"pitch":-57.48,"class":"PanoramaPoint","yaw":99.83}],"class":"QuadHotspotPanoramaOverlayImage","distance":50}],"maps":[],"enabledInCardboard":true,"id":"overlay_708A4E55_6603_3108_41BB_8AFDA8F70432","useHandCursor":true},{"data":{"label":"Golf Ville"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_9249A568_827D_47A9_41A0_175BF00309FB"],"items":[{"pitch":-8.02,"yaw":-110.56,"distance":50,"image":"this.res_934E2EE9_8275_42AB_41D5_BF8028783EE5","scaleMode":"fit_inside","hfov":8.66,"vfov":9.93,"data":{"label":"Golf Ville"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_92481566_827D_47D9_41CD_564E837869EF","useHandCursor":true},{"data":{"label":"Beach Park"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_70957FF7_6603_2F08_41D9_8B385DAAB037"],"items":[{"pitch":0.72,"yaw":-38.27,"distance":50,"image":"this.res_70B7A708_6605_3F18_41D4_53D949BF49AC","scaleMode":"fit_inside","hfov":7.1,"vfov":8.14,"data":{"label":"Beach Park"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_70964FF7_6603_2F08_41D3_B666CBACD0C5","useHandCursor":true},{"data":{"label":"Bs Ville"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_698F403A_666F_F5AD_41D2_011EFD32D739"],"items":[{"pitch":-8.8,"yaw":161.85,"distance":50,"image":"this.res_77438EBE_666C_8AA5_41C1_A2DE48111B89","scaleMode":"fit_inside","hfov":10.5,"vfov":12.11,"data":{"label":"Bs Ville"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_764EBFC5_666F_8AE7_41CE_25D3631A9E6C","useHandCursor":true},{"data":{"label":"Porto das Dunas"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_887985C5_87C2_2BBD_41C7_7D9FA63F3E09"],"items":[{"pitch":0.26,"yaw":-68.2,"distance":50,"image":"this.res_88001746_87C2_28BF_41D6_2232671B033F","scaleMode":"fit_inside","hfov":7.48,"vfov":8.62,"data":{"label":"Porto das Dunas"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_889AD59C_87C2_2BD3_41CD_B47F1E2CF9AF","useHandCursor":true},{"class":"PanoramaCameraSequence","id":"sequence_704C2FF3_6603_2F08_41D6_2FF668A7BA69","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_711A6817_667C_D109_41CC_79AC61F74C01"},{"levels":[{"width":229,"url":"media/res_70B50707_6605_3F08_41BA_B84CEA27A8A3_0.webp","height":264,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_70B50707_6605_3F08_41BA_B84CEA27A8A3"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_70FA725D_6603_5139_4173_67BD2CC4D6EE"},{"levels":[{"width":228,"url":"media/res_70B63707_6605_3F08_419D_CBF99A3A4CFA_0.webp","height":262,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_70B63707_6605_3F08_419D_CBF99A3A4CFA"},{"displayTooltipInTouchScreens":true,"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6B64CCF6_6654_8EA5_41D0_536E4579CABF"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_70896E56_6603_3108_41D6_20E7B7D1663C"},{"levels":[{"width":591,"url":"media/res_70B62707_6605_3F08_41D9_5BFBB026CF9B_0.webp","height":142,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_70B62707_6605_3F08_41D9_5BFBB026CF9B"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_9249A568_827D_47A9_41A0_175BF00309FB"},{"levels":[{"width":278,"url":"media/res_934E2EE9_8275_42AB_41D5_BF8028783EE5_0.webp","height":319,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_934E2EE9_8275_42AB_41D5_BF8028783EE5"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_70957FF7_6603_2F08_41D9_8B385DAAB037"},{"levels":[{"width":226,"url":"media/res_70B7A708_6605_3F18_41D4_53D949BF49AC_0.webp","height":262,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_70B7A708_6605_3F18_41D4_53D949BF49AC"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_698F403A_666F_F5AD_41D2_011EFD32D739"},{"levels":[{"width":337,"url":"media/res_77438EBE_666C_8AA5_41C1_A2DE48111B89_0.webp","height":390,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_77438EBE_666C_8AA5_41C1_A2DE48111B89"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_887985C5_87C2_2BBD_41C7_7D9FA63F3E09"},{"levels":[{"width":240,"url":"media/res_88001746_87C2_28BF_41D6_2232671B033F_0.webp","height":277,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_88001746_87C2_28BF_41D6_2232671B033F"}],"minHeight":0,"defaultMenu":["fullscreen","mute","rotation"],"class":"Player","minWidth":0,"data":{"displayTooltipInTouchScreens":true,"history":{},"textToSpeechConfig":{"pitch":1,"volume":1,"rate":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"speechOnTooltip":false},"locales":{"pt":"locale/pt.txt"},"name":"Player620","defaultLocale":"pt"},"id":"rootPlayer","start":"this.init()","backgroundColor":["#FFFFFF"],"scrollBarColor":"#000000","watermark":false,"backgroundColorRatios":[0],"propagateClick":false,"width":"100%","scrollBarMargin":2,"children":["this.MainViewer"],"layout":"absolute"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Tue Mar 11 2025