// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    API_Generic_Content: {
        ServiceName: 'GenericContentRestService.svc',
        GetGenericContentBySearchPaged: 'GetGenericContentBySearchPaged',
        GetGenericContentByCategoryUniqueName: 'GetGenericContentByCategoryUniqueName',
        GetGenericContentByUniqueName: 'GetGenericContentByUniqueName',
    },

    API_News_Content: {
        ServiceName: 'NewsRestService.svc',
        GetNewsByUniqueName: 'GetNewsByUniqueName',
        GetNewsByID: 'GetNewsByID',
        GetNewsByCategoryUniqueName: 'GetNewsByCategoryUniqueName',
        GetNewsBySearchPaged: 'GetNewsBySearchPaged'

    },

    API_Feedback_Content: {
        ServiceName: 'FeedbackRestService.svc',
        SendFeedBackToClient: 'SendFeedBackToClient',

    },

    API_FAQ_Content: {
        ServiceName: 'faqrestservice.svc',
        SendFeedBackToClient: 'GetFAQByCategoryUniqueName',

    },


    API_Helper_Content: {
        ServiceName: 'HelperRestService.svc',
        GetVisitorCount: 'GetVisitorCount',
        GetLatestModificationDate: 'GetLatestModificationDate'

    },

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
