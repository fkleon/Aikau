model.jsonModel = {
   services: [
      {
         name: "alfresco/services/LoggingService",
         config: {
            loggingPreferences: {
               enabled: true,
               all: true,
               warn: true,
               error: true
            }
         }
      },
      "alfresco/services/ErrorReporter"
   ],
   widgets: [
      {
         name: "alfresco/layout/VerticalWidgets",
         config: {
            widgets: [
               {
                  id: "SELECT_ITEM_1",
                  name: "alfresco/buttons/AlfButton",
                  config: {
                     label: "Select Item 1",
                     publishTopic: "ALF_DOCLIST_DOCUMENT_SELECTED",
                     publishPayload: {
                        value: {
                           itemKey: "one",
                           data: "item_one"
                        }
                     }
                  }
               },
               {
                  id: "DESELECT_ITEM_1",
                  name: "alfresco/buttons/AlfButton",
                  config: {
                     label: "De-select Item 1",
                     publishTopic: "ALF_DOCLIST_DOCUMENT_DESELECTED",
                     publishPayload: {
                        value: {
                           itemKey: "one",
                           data: "item_one"
                        }
                     }
                  }
               },
               {
                  id: "SELECT_ITEM_2",
                  name: "alfresco/buttons/AlfButton",
                  config: {
                     label: "Select Item 2",
                     publishTopic: "ALF_DOCLIST_DOCUMENT_SELECTED",
                     publishPayload: {
                        value: {
                           itemKey: "two",
                           data: "item_two"
                        }
                     }
                  }
               },
               {
                  id: "MENU_BAR",
                  name: "alfresco/menus/AlfMenuBar",
                  config: {
                     widgets: [
                        {
                           id: "SELECTED_ITEMS",
                           name: "alfresco/documentlibrary/AlfSelectedItemsMenuBarPopup",
                           config: {
                              debounceTime: 0, // Remove debounce time to aid testing
                              passive: false,
                              itemKeyProperty: "itemKey",
                              label: "Selected items...",
                              widgets: [
                                 {
                                    name: "alfresco/menus/AlfMenuGroup",
                                    config: {
                                       widgets: [
                                          {
                                             id: "MENU_ITEM",
                                             name: "alfresco/menus/AlfSelectedItemsMenuItem",
                                             config: {
                                                label: "Test",
                                                clearSelectedItemsOnClick: true,
                                                publishTopic: "TEST_ITEMS"
                                             }
                                          },
                                          {
                                             id: "MENU_ITEM_NO_CLEAR",
                                             name: "alfresco/menus/AlfSelectedItemsMenuItem",
                                             config: {
                                                label: "Test 2",
                                                clearSelectedItemsOnClick: false,
                                                publishTopic: "TEST_ITEMS_NO_CLEAR"
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
               }
            ]
         }
      },
      {
         name: "alfresco/logging/DebugLog"
      }
   ]
};