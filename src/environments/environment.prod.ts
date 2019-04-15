export const environment = {
    production: false,
    API_Generic_Content: {
        ServiceName: 'GenericContentRestService.svc',
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

};
