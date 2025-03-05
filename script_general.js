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
var script = {"watermark":false,"propagateClick":false,"layout":"absolute","start":"this.init()","minHeight":0,"id":"rootPlayer","minWidth":0,"data":{"locales":{"pt":"locale/pt.txt"},"displayTooltipInTouchScreens":true,"history":{},"defaultLocale":"pt","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false},"name":"Player620"},"backgroundColor":["#FFFFFF"],"scrollBarColor":"#000000","backgroundColorRatios":[0],"hash": "82ac5efdb3c2fb0f82f4c9f057372105d73283a9d3d3387e721d8ca9e675ad29", "definitions": [{"id":"panorama_7E20E32D_6603_3718_41D5_B663A447DC17_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_704C2FF3_6603_2F08_41D6_2FF668A7BA69","initialPosition":{"pitch":-29.87,"yaw":126.85,"class":"PanoramaCameraPosition"}},{"items":[{"media":"this.panorama_7E20E32D_6603_3718_41D5_B663A447DC17","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","camera":"this.panorama_7E20E32D_6603_3718_41D5_B663A447DC17_camera"}],"id":"mainPlayList","class":"PlayList"},{"progressBorderSize":0,"progressBarBorderSize":0,"height":"100%","toolTipBackgroundColor":"#F6F6F6","propagateClick":false,"subtitlesTextShadowHorizontalLength":1,"subtitlesBackgroundColor":"#000000","subtitlesTop":0,"subtitlesGap":0,"playbackBarHeadShadow":true,"minHeight":50,"subtitlesTextShadowVerticalLength":1,"surfaceReticleColor":"#FFFFFF","minWidth":100,"playbackBarHeadBackgroundColor":["#111111","#666666"],"vrPointerSelectionColor":"#FF6600","subtitlesTextShadowColor":"#000000","vrPointerSelectionTime":2000,"progressBorderRadius":2,"toolTipPaddingTop":4,"data":{"name":"Main Viewer"},"playbackBarBottom":5,"progressLeft":"33%","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"subtitlesFontSize":"3vmin","toolTipFontColor":"#606060","toolTipFontSize":"1.11vmin","playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowOpacity":1,"toolTipPaddingBottom":4,"toolTipFontFamily":"Arial","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"playbackBarProgressBorderRadius":0,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"vrThumbstickRotationStep":20,"subtitlesFontColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"subtitlesBackgroundOpacity":0.2,"id":"MainViewer","progressBackgroundColorRatios":[0],"playbackBarProgressBackgroundColorRatios":[0],"progressRight":"33%","progressOpacity":0.7,"playbackBarBorderRadius":0,"progressBarBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipPaddingRight":6,"progressBarBackgroundColorDirection":"horizontal","playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"vrPointerColor":"#FFFFFF","subtitlesBorderColor":"#FFFFFF","subtitlesBottom":50,"progressBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"toolTipTextShadowColor":"#000000","firstTransitionDuration":0,"progressBackgroundColor":["#000000"],"toolTipShadowColor":"#333138","playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadHeight":15,"progressBottom":10,"subtitlesFontFamily":"Arial","playbackBarHeadShadowColor":"#000000","playbackBarBorderSize":0,"playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipPaddingLeft":6,"class":"ViewerArea","progressHeight":2,"progressBarBorderRadius":2,"toolTipBorderColor":"#767676","width":"100%"},{"overlays":["this.overlay_711B9815_667C_D109_41C2_35359301E616","this.overlay_70FB225D_6603_5139_41CB_CA17F17D19D8","this.overlay_7084949D_6603_5138_41C5_FAAF23AE8038","this.overlay_708A4E55_6603_3108_41BB_8AFDA8F70432","this.overlay_7092599C_6603_D338_41B2_FD2F8717230A","this.overlay_70882155_6603_7308_4182_1CA142662C5F","this.overlay_70964FF7_6603_2F08_41D3_B666CBACD0C5"],"hfov":360,"hfovMin":"120%","label":trans('panorama_7E20E32D_6603_3718_41D5_B663A447DC17.label'),"frames":[{"cube":{"levels":[{"colCount":36,"width":18432,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_0/{face}/0/{row}_{column}.webp","height":3072,"tags":"ondemand","rowCount":6,"class":"TiledImageResourceLevel"},{"colCount":18,"width":9216,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_0/{face}/1/{row}_{column}.webp","height":1536,"tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel"},{"colCount":12,"width":6144,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_0/{face}/2/{row}_{column}.webp","height":1024,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"colCount":6,"width":3072,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_0/{face}/3/{row}_{column}.webp","height":512,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_t.webp","class":"CubicPanoramaFrame"}],"id":"panorama_7E20E32D_6603_3718_41D5_B663A447DC17","vfov":180,"hfovMax":130,"data":{"label":"BS WAVE"},"class":"Panorama","thumbnailUrl":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_t.webp"},{"displayPlaybackBar":true,"touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"aaEnabled":true,"class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer"},{"class":"PanoramaCameraSequence","id":"sequence_704C2FF3_6603_2F08_41D6_2FF668A7BA69","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}]},{"data":{"label":"Mandara By Yoo"},"items":[{"pitch":0.25,"yaw":146.37,"data":{"label":"Mandara By Yoo"},"distance":50,"image":"this.res_70B50707_6605_3F08_41BA_B84CEA27A8A3","hfov":4.5,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","vfov":5.16}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_711A6817_667C_D109_41CC_79AC61F74C01"],"useHandCursor":true,"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_711B9815_667C_D109_41C2_35359301E616"},{"data":{"label":"Mandara Kauai"},"items":[{"pitch":0.22,"yaw":141.64,"data":{"label":"Mandara Kauai"},"distance":50,"image":"this.res_70B63707_6605_3F08_419D_CBF99A3A4CFA","hfov":4.39,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","vfov":5.03}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_70FA725D_6603_5139_4173_67BD2CC4D6EE"],"useHandCursor":true,"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_70FB225D_6603_5139_41CB_CA17F17D19D8"},{"data":{"label":"Poligono"},"items":[{"pitch":-53.2,"yaw":126.02,"image":{"levels":[{"width":960,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_HS_6gi7sq79.webp","height":720,"class":"ImageResourceLevel"}],"class":"ImageResource"},"distance":50,"vfov":30.88,"class":"HotspotPanoramaOverlayImage","hfov":40.45,"data":{"label":"Poligono"}}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_708A649E_6603_5138_41D1_ABB1289747B9"],"useHandCursor":true,"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_7084949D_6603_5138_41C5_FAAF23AE8038"},{"data":{"label":"Tags"},"items":[{"image":"this.res_70B62707_6605_3F08_41D9_5BFBB026CF9B","data":{"label":"Tags"},"class":"QuadHotspotPanoramaOverlayImage","distance":50,"vertices":[{"pitch":-48.29,"yaw":113.44,"class":"PanoramaPoint"},{"pitch":-47.82,"yaw":155.52,"class":"PanoramaPoint"},{"pitch":-55.16,"yaw":159.84,"class":"PanoramaPoint"},{"pitch":-54.29,"yaw":103.96,"class":"PanoramaPoint"}]}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_70896E56_6603_3108_41D6_20E7B7D1663C"],"useHandCursor":true,"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_708A4E55_6603_3108_41BB_8AFDA8F70432"},{"data":{"label":"Golf Ville"},"items":[{"pitch":-8.02,"yaw":-110.56,"data":{"label":"Golf Ville"},"distance":50,"image":"this.res_70B7C707_6605_3F08_41D1_3F97EEADF7B4","hfov":8.66,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","vfov":9.93}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_7091699C_6603_D338_41C2_7BFFCC334731"],"useHandCursor":true,"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_7092599C_6603_D338_41B2_FD2F8717230A"},{"data":{"label":"Porto das Dunas"},"items":[{"pitch":0.37,"yaw":-68.21,"data":{"label":"Porto das Dunas"},"distance":50,"image":"this.res_70B7B708_6605_3F18_41C1_40DAF83CCDF3","hfov":5.6,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","vfov":6.42}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_708F1155_6603_7308_41CE_32A0AA633775"],"useHandCursor":true,"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_70882155_6603_7308_4182_1CA142662C5F"},{"data":{"label":"Beach Park"},"items":[{"pitch":0.72,"yaw":-38.27,"data":{"label":"Beach Park"},"distance":50,"image":"this.res_70B7A708_6605_3F18_41D4_53D949BF49AC","hfov":4.88,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","vfov":5.6}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_70957FF7_6603_2F08_41D9_8B385DAAB037"],"useHandCursor":true,"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_70964FF7_6603_2F08_41D3_B666CBACD0C5"},{"levels":[{"width":144,"url":"media/res_70B50707_6605_3F08_41BA_B84CEA27A8A3_0.webp","height":166,"class":"ImageResourceLevel"}],"id":"res_70B50707_6605_3F08_41BA_B84CEA27A8A3","class":"ImageResource"},{"class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_711A6817_667C_D109_41CC_79AC61F74C01","mapColor":"any"},{"levels":[{"width":141,"url":"media/res_70B63707_6605_3F08_419D_CBF99A3A4CFA_0.webp","height":162,"class":"ImageResourceLevel"}],"id":"res_70B63707_6605_3F08_419D_CBF99A3A4CFA","class":"ImageResource"},{"class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_70FA725D_6603_5139_4173_67BD2CC4D6EE","mapColor":"any"},{"class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_708A649E_6603_5138_41D1_ABB1289747B9","mapColor":"image"},{"levels":[{"width":591,"url":"media/res_70B62707_6605_3F08_41D9_5BFBB026CF9B_0.webp","height":142,"class":"ImageResourceLevel"}],"id":"res_70B62707_6605_3F08_41D9_5BFBB026CF9B","class":"ImageResource"},{"class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_70896E56_6603_3108_41D6_20E7B7D1663C","mapColor":"any"},{"levels":[{"width":278,"url":"media/res_70B7C707_6605_3F08_41D1_3F97EEADF7B4_0.webp","height":319,"class":"ImageResourceLevel"}],"id":"res_70B7C707_6605_3F08_41D1_3F97EEADF7B4","class":"ImageResource"},{"class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_7091699C_6603_D338_41C2_7BFFCC334731","mapColor":"any"},{"levels":[{"width":179,"url":"media/res_70B7B708_6605_3F18_41C1_40DAF83CCDF3_0.webp","height":206,"class":"ImageResourceLevel"}],"id":"res_70B7B708_6605_3F18_41C1_40DAF83CCDF3","class":"ImageResource"},{"class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_708F1155_6603_7308_41CE_32A0AA633775","mapColor":"any"},{"levels":[{"width":156,"url":"media/res_70B7A708_6605_3F18_41D4_53D949BF49AC_0.webp","height":180,"class":"ImageResourceLevel"}],"id":"res_70B7A708_6605_3F18_41D4_53D949BF49AC","class":"ImageResource"},{"class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_70957FF7_6603_2F08_41D9_8B385DAAB037","mapColor":"any"}],"scripts":{"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"shareSocial":TDV.Tour.Script.shareSocial,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"playAudioList":TDV.Tour.Script.playAudioList,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"clone":TDV.Tour.Script.clone,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"openLink":TDV.Tour.Script.openLink,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"historyGoForward":TDV.Tour.Script.historyGoForward,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPixels":TDV.Tour.Script.getPixels,"mixObject":TDV.Tour.Script.mixObject,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getOverlays":TDV.Tour.Script.getOverlays,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizStart":TDV.Tour.Script.quizStart,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizShowScore":TDV.Tour.Script.quizShowScore,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"existsKey":TDV.Tour.Script.existsKey,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setValue":TDV.Tour.Script.setValue,"init":TDV.Tour.Script.init,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"resumePlayers":TDV.Tour.Script.resumePlayers,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"startMeasurement":TDV.Tour.Script.startMeasurement,"executeJS":TDV.Tour.Script.executeJS,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"unregisterKey":TDV.Tour.Script.unregisterKey,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizFinish":TDV.Tour.Script.quizFinish,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getComponentByName":TDV.Tour.Script.getComponentByName,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"toggleVR":TDV.Tour.Script.toggleVR,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMainViewer":TDV.Tour.Script.getMainViewer,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"textToSpeech":TDV.Tour.Script.textToSpeech,"registerKey":TDV.Tour.Script.registerKey,"downloadFile":TDV.Tour.Script.downloadFile,"isPanorama":TDV.Tour.Script.isPanorama,"disableVR":TDV.Tour.Script.disableVR,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showWindow":TDV.Tour.Script.showWindow,"getKey":TDV.Tour.Script.getKey,"enableVR":TDV.Tour.Script.enableVR,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"initQuiz":TDV.Tour.Script.initQuiz,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaByName":TDV.Tour.Script.getMediaByName,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMapLocation":TDV.Tour.Script.setMapLocation,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"createTween":TDV.Tour.Script.createTween,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"translate":TDV.Tour.Script.translate,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setLocale":TDV.Tour.Script.setLocale},"defaultMenu":["fullscreen","mute","rotation"],"width":"100%","scrollBarMargin":2,"height":"100%","children":["this.MainViewer"],"gap":10,"class":"Player"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Wed Mar 5 2025