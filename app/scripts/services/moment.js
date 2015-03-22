'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.moment
 * @description
 * # moment
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('momentService', function ($cookies) {
            // Service logic
            // ...
            //assign global moment
            var momentService = moment;
            
            //en-gb start
            momentService.defineLocale('en-gb', {
                months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
                monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
                weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
                weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
                longDateFormat: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'DD/MM/YYYY',
                    LL: 'D MMMM YYYY',
                    LLL: 'D MMMM YYYY LT',
                    LLLL: 'dddd, D MMMM YYYY LT'
                },
                calendar: {
                    sameDay: '[Today at] LT',
                    nextDay: '[Tomorrow at] LT',
                    nextWeek: 'dddd [at] LT',
                    lastDay: '[Yesterday at] LT',
                    lastWeek: '[Last] dddd [at] LT',
                    sameElse: 'L'
                },
                relativeTime: {
                    future: 'in %s',
                    past: '%s ago',
                    s: 'a few seconds',
                    m: 'a minute',
                    mm: '%d minutes',
                    h: 'an hour',
                    hh: '%d hours',
                    d: 'a day',
                    dd: '%d days',
                    M: 'a month',
                    MM: '%d months',
                    y: 'a year',
                    yy: '%d years'
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (number) {
                    var b = number % 10,
                            output = (~~(number % 100 / 10) === 1) ? 'th' :
                            (b === 1) ? 'st' :
                            (b === 2) ? 'nd' :
                            (b === 3) ? 'rd' : 'th';
                    return number + output;
                },
                week: {
                    dow: 1, // Monday is the first day of the week.
                    doy: 4  // The week that contains Jan 4th is the first week of the year.
                }
            });
            //en-gb end

            //pl start
            var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
                    monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');

            function plural(n) {
                return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
            }

            function translate(number, withoutSuffix, key) {
                var result = number + ' ';
                switch (key) {
                    case 'm':
                        return withoutSuffix ? 'minuta' : 'minutę';
                    case 'mm':
                        return result + (plural(number) ? 'minuty' : 'minut');
                    case 'h':
                        return withoutSuffix ? 'godzina' : 'godzinę';
                    case 'hh':
                        return result + (plural(number) ? 'godziny' : 'godzin');
                    case 'MM':
                        return result + (plural(number) ? 'miesiące' : 'miesięcy');
                    case 'yy':
                        return result + (plural(number) ? 'lata' : 'lat');
                }
            }

            momentService.defineLocale('pl', {
                months: function (momentToFormat, format) {
                    if (/D MMMM/.test(format)) {
                        return monthsSubjective[momentToFormat.month()];
                    } else {
                        return monthsNominative[momentToFormat.month()];
                    }
                },
                monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
                weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
                weekdaysShort: 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
                weekdaysMin: 'N_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
                longDateFormat: {
                    LT: 'HH:mm',
                    LTS: 'LT:ss',
                    L: 'DD.MM.YYYY',
                    LL: 'D MMMM YYYY',
                    LLL: 'D MMMM YYYY LT',
                    LLLL: 'dddd, D MMMM YYYY LT'
                },
                calendar: {
                    sameDay: '[Dziś o] LT',
                    nextDay: '[Jutro o] LT',
                    nextWeek: '[W] dddd [o] LT',
                    lastDay: '[Wczoraj o] LT',
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return '[W zeszłą niedzielę o] LT';
                            case 3:
                                return '[W zeszłą środę o] LT';
                            case 6:
                                return '[W zeszłą sobotę o] LT';
                            default:
                                return '[W zeszły] dddd [o] LT';
                        }
                    },
                    sameElse: 'L'
                },
                relativeTime: {
                    future: 'za %s',
                    past: '%s temu',
                    s: 'kilka sekund',
                    m: translate,
                    mm: translate,
                    h: translate,
                    hh: translate,
                    d: '1 dzień',
                    dd: '%d dni',
                    M: 'miesiąc',
                    MM: translate,
                    y: 'rok',
                    yy: translate
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: '%d.',
                week: {
                    dow: 1, // Monday is the first day of the week.
                    doy: 4  // The week that contains Jan 4th is the first week of the year.
                }
            });
            //pl end

            momentService.locale($cookies.NG_TRANSLATE_LANG_KEY ? $cookies.NG_TRANSLATE_LANG_KEY : 'en-gb');

            // Public API here
            return momentService;
        });
