/*jshint maxlen:false*/

var view = {
   name: "alfresco/lists/views/AlfListView",
   config: {
      widgets: [
         {
            name: "alfresco/lists/views/layouts/Row",
            config: {
               widgets: [
                  {
                     name: "alfresco/lists/views/layouts/Cell",
                     config: {
                        widgets: [
                           {
                              name: "alfresco/renderers/Property",
                              config: {
                                 propertyToRender: "index"
                              }
                           }
                        ]
                     }
                  }
               ]
            }
         }
      ]
   }
};

model.jsonModel = {
   services: [
      {
         name: "alfresco/services/LoggingService",
         config: {
            loggingPreferences: {
               enabled: true,
               all: true
            }
         }
      },
      "alfresco/services/DashletService",
      "alfresco/services/NotificationService",
      {
         name: "aikauTesting/mockservices/PaginationService",
         config: {
            loadDataSubscriptionTopic: "ALF_RETRIEVE_DOCUMENTS_REQUEST"
         }
      },
      "alfresco/services/NavigationService"
   ],
   widgets: [
      {
         "name": "alfresco/layout/HorizontalWidgets",
         "config": {
            "widgetMarginLeft": 10,
            "widgetMarginRight": 10,
            "widgets": [
               {
                  name: "alfresco/dashlets/Dashlet",
                  id: "BELOW_DASHLET",
                  config: {
                     additionalCssClasses: "smallpad",
                     pubSubScope: "BELOW_",
                     title: "Dashlet (height BELOW scroll tolerance)",
                     bodyHeight: 200,
                     widgetsForTitleBarActions: [
                        {
                           name: "alfresco/html/Label",
                           config: {
                              label: "Title-bar actions"
                           }
                        }
                     ],
                     widgetsForToolbar: [
                        {
                           name: "alfresco/html/Label",
                           config: {
                              label: "Toolbar"
                           }
                        }
                     ],
                     widgetsForToolbar2: [
                        {
                           name: "alfresco/html/Label",
                           config: {
                              label: "Toolbar2"
                           }
                        }
                     ],
                     widgetsForBody: [
                        {
                           name: "alfresco/layout/InfiniteScrollArea",
                           config: {
                              scrollTolerance: 300,
                              widgets: [
                                 {
                                    id: "INFITE_SCROLL_LIST_1",
                                    name: "alfresco/lists/AlfSortablePaginatedList",
                                    config: {
                                       useHash: false,
                                       useInfiniteScroll: true,
                                       currentPageSize: 10,
                                       widgets: [view]
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               },
               {
                  name: "alfresco/dashlets/Dashlet",
                  id: "ABOVE_DASHLET",
                  config: {
                     additionalCssClasses: "smallpad",
                     pubSubScope: "ABOVE_",
                     title: "(height ABOVE scroll tolerance)",
                     bodyHeight: 500,
                     widgetsForTitleBarActions: [
                        {
                           name: "alfresco/html/Label",
                           config: {
                              label: "Title-bar actions"
                           }
                        }
                     ],
                     widgetsForToolbar: [
                        {
                           name: "alfresco/html/Label",
                           config: {
                              label: "Toolbar"
                           }
                        }
                     ],
                     widgetsForToolbar2: [
                        {
                           name: "alfresco/html/Label",
                           config: {
                              label: "Toolbar2"
                           }
                        }
                     ],
                     widgetsForBody: [
                        {
                           name: "alfresco/layout/InfiniteScrollArea",
                           config: {
                              scrollTolerance: 300,
                              widgets: [
                                 {
                                    id: "INFITE_SCROLL_LIST_2",
                                    name: "alfresco/lists/AlfSortablePaginatedList",
                                    config: {
                                       useHash: false,
                                       useInfiniteScroll: true,
                                       currentPageSize: 20,
                                       widgets: [view]
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               }
            ]
         }
      },
      {
         name: "aikauTesting/mockservices/DashletServiceMockXhr"
      },
      {
         name: "alfresco/logging/DebugLog"
      }
   ]
};