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
var script = {"defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"minHeight":0,"children":["this.MainViewer"],"minWidth":0,"hash": "34c97665c0802f8c89935d3fe50839f0dd694e9da650fb2d4f53da20d05e8ab9", "definitions": [{"initialSequence":"this.sequence_704C2FF3_6603_2F08_41D6_2FF668A7BA69","enterPointingToHorizon":true,"class":"PanoramaCamera","initialPosition":{"pitch":-29.87,"yaw":126.85,"class":"PanoramaCameraPosition"},"id":"panorama_7E20E32D_6603_3718_41D5_B663A447DC17_camera"},{"arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","class":"PanoramaPlayer","displayPlaybackBar":true,"aaEnabled":true,"id":"MainViewerPanoramaPlayer"},{"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","minHeight":50,"playbackBarHeadBorderSize":0,"minWidth":100,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadow":true,"subtitlesTextShadowOpacity":1,"subtitlesTextShadowHorizontalLength":1,"toolTipPaddingBottom":4,"playbackBarBackgroundOpacity":1,"toolTipPaddingTop":4,"playbackBarHeadBackgroundColor":["#111111","#666666"],"vrPointerSelectionColor":"#FF6600","subtitlesBorderColor":"#FFFFFF","playbackBarBottom":5,"data":{"name":"Main Viewer"},"toolTipFontSize":"1.11vmin","subtitlesFontColor":"#FFFFFF","playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionTime":2000,"class":"ViewerArea","progressBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"toolTipShadowColor":"#333138","progressRight":"33%","propagateClick":false,"progressOpacity":0.7,"subtitlesTextShadowVerticalLength":1,"playbackBarProgressBorderRadius":0,"progressBarBackgroundColorDirection":"horizontal","firstTransitionDuration":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"id":"MainViewer","vrPointerColor":"#FFFFFF","toolTipTextShadowColor":"#000000","progressBorderColor":"#000000","toolTipPaddingLeft":6,"playbackBarHeadShadowOpacity":0.7,"vrThumbstickRotationStep":20,"subtitlesFontFamily":"Arial","progressBarBackgroundColor":["#3399FF"],"toolTipFontColor":"#606060","playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingRight":6,"subtitlesTop":0,"toolTipBorderColor":"#767676","playbackBarBorderColor":"#FFFFFF","progressBackgroundColor":["#000000"],"progressBottom":10,"playbackBarBorderRadius":0,"progressHeight":2,"playbackBarProgressBorderColor":"#000000","subtitlesTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","progressBarBorderRadius":2,"progressBorderSize":0,"progressBarBorderSize":0,"playbackBarHeadBorderColor":"#000000","height":"100%","subtitlesFontSize":"3vmin","playbackBarHeadBorderRadius":0,"width":"100%","subtitlesBackgroundColor":"#000000","progressBorderRadius":2,"subtitlesGap":0,"playbackBarBorderSize":0,"playbackBarLeft":0,"subtitlesBottom":50,"progressLeft":"33%","playbackBarHeadShadowBlurRadius":3,"toolTipFontFamily":"Arial"},{"label":trans('panorama_7E20E32D_6603_3718_41D5_B663A447DC17.label'),"class":"Panorama","frames":[{"cube":{"levels":[{"width":18432,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","height":3072,"rowCount":6,"tags":"ondemand","colCount":36},{"width":9216,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","height":1536,"rowCount":3,"tags":"ondemand","colCount":18},{"width":6144,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","height":1024,"rowCount":2,"tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","height":512,"rowCount":1,"tags":["ondemand","preload"],"colCount":6}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_t.webp","class":"CubicPanoramaFrame"}],"id":"panorama_7E20E32D_6603_3718_41D5_B663A447DC17","thumbnailUrl":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_t.webp","hfovMax":130,"data":{"label":"BS WAVE"},"vfov":180,"overlays":["this.overlay_711B9815_667C_D109_41C2_35359301E616","this.overlay_70FB225D_6603_5139_41CB_CA17F17D19D8","this.overlay_6B71ECF2_6654_8EA2_41D2_A2FA4AC2C674","this.overlay_708A4E55_6603_3108_41BB_8AFDA8F70432","this.overlay_92481566_827D_47D9_41CD_564E837869EF","this.overlay_70882155_6603_7308_4182_1CA142662C5F","this.overlay_70964FF7_6603_2F08_41D3_B666CBACD0C5","this.overlay_764EBFC5_666F_8AE7_41CE_25D3631A9E6C"],"hfovMin":"120%","hfov":360},{"items":[{"camera":"this.panorama_7E20E32D_6603_3718_41D5_B663A447DC17_camera","media":"this.panorama_7E20E32D_6603_3718_41D5_B663A447DC17","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_704C2FF3_6603_2F08_41D6_2FF668A7BA69"},{"data":{"label":"Mandara By Yoo"},"useHandCursor":true,"items":[{"pitch":1.84,"yaw":149.46,"distance":50,"image":"this.res_70B50707_6605_3F08_41BA_B84CEA27A8A3","vfov":8.22,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":7.16,"data":{"label":"Mandara By Yoo"}}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_711A6817_667C_D109_41CC_79AC61F74C01"],"maps":[],"class":"HotspotPanoramaOverlay","id":"overlay_711B9815_667C_D109_41C2_35359301E616"},{"data":{"label":"Mandara Kauai"},"useHandCursor":true,"items":[{"pitch":1.82,"yaw":141.98,"distance":50,"image":"this.res_70B63707_6605_3F08_419D_CBF99A3A4CFA","vfov":8.17,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":7.12,"data":{"label":"Mandara Kauai"}}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_70FA725D_6603_5139_4173_67BD2CC4D6EE"],"maps":[],"class":"HotspotPanoramaOverlay","id":"overlay_70FB225D_6603_5139_41CB_CA17F17D19D8"},{"data":{"label":"Poligono"},"useHandCursor":true,"items":[{"pitch":-58.38,"yaw":130.94,"image":{"levels":[{"width":966,"url":"media/panorama_7E20E32D_6603_3718_41D5_B663A447DC17_HS_b3pslnui.webp","class":"ImageResourceLevel","height":485}],"class":"ImageResource"},"vfov":21.11,"distance":50,"data":{"label":"Poligono"},"class":"HotspotPanoramaOverlayImage","hfov":40.68}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_6B64CCF6_6654_8EA5_41D0_536E4579CABF"],"maps":[],"class":"HotspotPanoramaOverlay","id":"overlay_6B71ECF2_6654_8EA2_41D2_A2FA4AC2C674"},{"data":{"label":"Tags"},"useHandCursor":true,"items":[{"image":"this.res_70B62707_6605_3F08_41D9_5BFBB026CF9B","vertices":[{"pitch":-51.77,"yaw":110.57,"class":"PanoramaPoint"},{"pitch":-51.3,"yaw":155.97,"class":"PanoramaPoint"},{"pitch":-58.51,"yaw":161.23,"class":"PanoramaPoint"},{"pitch":-57.48,"yaw":99.83,"class":"PanoramaPoint"}],"data":{"label":"Tags"},"class":"QuadHotspotPanoramaOverlayImage","distance":50}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_70896E56_6603_3108_41D6_20E7B7D1663C"],"maps":[],"class":"HotspotPanoramaOverlay","id":"overlay_708A4E55_6603_3108_41BB_8AFDA8F70432"},{"data":{"label":"Golf Ville"},"useHandCursor":true,"items":[{"pitch":-8.02,"yaw":-110.56,"distance":50,"image":"this.res_934E2EE9_8275_42AB_41D5_BF8028783EE5","vfov":9.93,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":8.66,"data":{"label":"Golf Ville"}}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_9249A568_827D_47A9_41A0_175BF00309FB"],"maps":[],"class":"HotspotPanoramaOverlay","id":"overlay_92481566_827D_47D9_41CD_564E837869EF"},{"data":{"label":"Porto das Dunas"},"useHandCursor":true,"items":[{"pitch":0.37,"yaw":-68.21,"distance":50,"image":"this.res_70B7B708_6605_3F18_41C1_40DAF83CCDF3","vfov":8.34,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":7.27,"data":{"label":"Porto das Dunas"}}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_708F1155_6603_7308_41CE_32A0AA633775"],"maps":[],"class":"HotspotPanoramaOverlay","id":"overlay_70882155_6603_7308_4182_1CA142662C5F"},{"data":{"label":"Beach Park"},"useHandCursor":true,"items":[{"pitch":0.72,"yaw":-38.27,"distance":50,"image":"this.res_70B7A708_6605_3F18_41D4_53D949BF49AC","vfov":8.14,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":7.1,"data":{"label":"Beach Park"}}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_70957FF7_6603_2F08_41D9_8B385DAAB037"],"maps":[],"class":"HotspotPanoramaOverlay","id":"overlay_70964FF7_6603_2F08_41D3_B666CBACD0C5"},{"data":{"label":"Bs Ville"},"useHandCursor":true,"items":[{"pitch":-8.8,"yaw":161.85,"distance":50,"image":"this.res_77438EBE_666C_8AA5_41C1_A2DE48111B89","vfov":12.11,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":10.5,"data":{"label":"Bs Ville"}}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_698F403A_666F_F5AD_41D2_011EFD32D739"],"maps":[],"class":"HotspotPanoramaOverlay","id":"overlay_764EBFC5_666F_8AE7_41CE_25D3631A9E6C"},{"levels":[{"width":229,"url":"media/res_70B50707_6605_3F08_41BA_B84CEA27A8A3_0.webp","class":"ImageResourceLevel","height":264}],"id":"res_70B50707_6605_3F08_41BA_B84CEA27A8A3","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_711A6817_667C_D109_41CC_79AC61F74C01","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"width":228,"url":"media/res_70B63707_6605_3F08_419D_CBF99A3A4CFA_0.webp","class":"ImageResourceLevel","height":262}],"id":"res_70B63707_6605_3F08_419D_CBF99A3A4CFA","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_70FA725D_6603_5139_4173_67BD2CC4D6EE","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_6B64CCF6_6654_8EA5_41D0_536E4579CABF","class":"HotspotPanoramaOverlayArea","mapColor":"image"},{"levels":[{"width":591,"url":"media/res_70B62707_6605_3F08_41D9_5BFBB026CF9B_0.webp","class":"ImageResourceLevel","height":142}],"id":"res_70B62707_6605_3F08_41D9_5BFBB026CF9B","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_70896E56_6603_3108_41D6_20E7B7D1663C","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"width":278,"url":"media/res_934E2EE9_8275_42AB_41D5_BF8028783EE5_0.webp","class":"ImageResourceLevel","height":319}],"id":"res_934E2EE9_8275_42AB_41D5_BF8028783EE5","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9249A568_827D_47A9_41A0_175BF00309FB","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"width":234,"url":"media/res_70B7B708_6605_3F18_41C1_40DAF83CCDF3_0.webp","class":"ImageResourceLevel","height":268}],"id":"res_70B7B708_6605_3F18_41C1_40DAF83CCDF3","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_708F1155_6603_7308_41CE_32A0AA633775","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"width":226,"url":"media/res_70B7A708_6605_3F18_41D4_53D949BF49AC_0.webp","class":"ImageResourceLevel","height":262}],"id":"res_70B7A708_6605_3F18_41D4_53D949BF49AC","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_70957FF7_6603_2F08_41D9_8B385DAAB037","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"width":337,"url":"media/res_77438EBE_666C_8AA5_41C1_A2DE48111B89_0.webp","class":"ImageResourceLevel","height":390}],"id":"res_77438EBE_666C_8AA5_41C1_A2DE48111B89","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_698F403A_666F_F5AD_41D2_011EFD32D739","class":"HotspotPanoramaOverlayArea","mapColor":"any"}],"id":"rootPlayer","backgroundColor":["#FFFFFF"],"watermark":false,"scrollBarColor":"#000000","scrollBarMargin":2,"gap":10,"class":"Player","data":{"textToSpeechConfig":{"pitch":1,"volume":1,"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnTooltip":false},"name":"Player620","history":{},"displayTooltipInTouchScreens":true,"defaultLocale":"pt","locales":{"pt":"locale/pt.txt"}},"width":"100%","scripts":{"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"createTween":TDV.Tour.Script.createTween,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"mixObject":TDV.Tour.Script.mixObject,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"clone":TDV.Tour.Script.clone,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"executeJS":TDV.Tour.Script.executeJS,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"openLink":TDV.Tour.Script.openLink,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPixels":TDV.Tour.Script.getPixels,"toggleVR":TDV.Tour.Script.toggleVR,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"resumePlayers":TDV.Tour.Script.resumePlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showWindow":TDV.Tour.Script.showWindow,"getOverlays":TDV.Tour.Script.getOverlays,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"registerKey":TDV.Tour.Script.registerKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setValue":TDV.Tour.Script.setValue,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"init":TDV.Tour.Script.init,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"playAudioList":TDV.Tour.Script.playAudioList,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"existsKey":TDV.Tour.Script.existsKey,"historyGoForward":TDV.Tour.Script.historyGoForward,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"initQuiz":TDV.Tour.Script.initQuiz,"startMeasurement":TDV.Tour.Script.startMeasurement,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getKey":TDV.Tour.Script.getKey,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"quizShowScore":TDV.Tour.Script.quizShowScore,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizStart":TDV.Tour.Script.quizStart,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"downloadFile":TDV.Tour.Script.downloadFile,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"unregisterKey":TDV.Tour.Script.unregisterKey,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"cloneBindings":TDV.Tour.Script.cloneBindings,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizFinish":TDV.Tour.Script.quizFinish,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getComponentByName":TDV.Tour.Script.getComponentByName,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"isPanorama":TDV.Tour.Script.isPanorama,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getMediaByName":TDV.Tour.Script.getMediaByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"translate":TDV.Tour.Script.translate,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"disableVR":TDV.Tour.Script.disableVR,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"enableVR":TDV.Tour.Script.enableVR,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setMapLocation":TDV.Tour.Script.setMapLocation,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setLocale":TDV.Tour.Script.setLocale},"height":"100%","layout":"absolute","start":"this.init()","backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Mon Mar 10 2025