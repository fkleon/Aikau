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
      "alfresco/services/NavigationService"
   ],
   widgets: [
      {
         id: "SET_HASH",
         name: "alfresco/buttons/AlfButton",
         config: {
            label: "Set Form Via Hash",
            publishTopic: "ALF_NAVIGATE_TO_PAGE",
            publishPayload: {
               url: "field1=updatedField1&field2=updatedField2",
               type: "HASH"
            }
         }
      },
      {
         name: "alfresco/layout/ClassicWindow",
         config: {
            title: "Hash based form (some fields only)",
            widgets: [
               {
                  id: "HASH_FORM1",
                  name: "alfresco/forms/Form",
                  config: {
                     showOkButton: true,
                     okButtonPublishTopic: "SET_HASH",
                     okButtonLabel: "Set Hash",
                     showCancelButton: false,
                     useHash: true,
                     setHash: true,
                     hashVarsForUpdate: ["field1","field2"],
                     pubSubScope: "FORM1_",
                     widgets: [
                        {
                           id: "HASH_TEXT_BOX_1",
                           name: "alfresco/forms/controls/TextBox",
                           config: {
                              label: "Field 1",
                              name: "field1",
                              value: ""
                           }
                        },
                        {
                           id: "HASH_TEXT_BOX_2",
                           name: "alfresco/forms/controls/TextBox",
                           config: {
                              label: "Field 2",
                              name: "field2",
                              value: ""
                           }
                        },
                        {
                           id: "HASH_TEXT_BOX_3",
                           name: "alfresco/forms/controls/TextBox",
                           config: {
                              label: "Field 3",
                              name: "field3",
                              value: ""
                           }
                        }
                     ]
                  }
               }
            ]
         }
      },
      {
         name: "alfresco/layout/ClassicWindow",
         config: {
            title: "Hash based form (all fields)",
            widgets: [
               {
                  id: "HASH_FORM2",
                  name: "alfresco/forms/Form",
                  config: {
                     showOkButton: true,
                     okButtonPublishTopic: "SET_HASH",
                     okButtonLabel: "Set Hash",
                     showCancelButton: false,
                     useHash: true,
                     setHash: true,
                     pubSubScope: "FORM2_",
                     widgets: [
                        {
                           id: "HASH_TEXT_BOX_4",
                           name: "alfresco/forms/controls/TextBox",
                           config: {
                              fieldId: "HASH_TEXT_BOX_4",
                              label: "Field 1",
                              name: "field1",
                              value: ""
                           }
                        },
                        {
                           id: "HASH_TEXT_BOX_5",
                           name: "alfresco/forms/controls/TextBox",
                           config: {
                              label: "Field 2",
                              name: "field2",
                              value: "",
                              postWhenHiddenOrDisabled: false,
                              disablementConfig: {
                                 initialValue: false,
                                 rules: [
                                    {
                                       targetId: "HASH_TEXT_BOX_4",
                                       is: ["disableField2"]
                                    }
                                 ]
                              }
                           }
                        },
                        {
                           id: "HASH_TEXT_BOX_6",
                           name: "alfresco/forms/controls/TextBox",
                           config: {
                              label: "Field 3",
                              name: "field3",
                              value: ""
                           }
                        }
                     ]
                  }
               }
            ]
         }
      },
      {
         name: "alfresco/layout/ClassicWindow",
         config: {
            title: "Hash based form (update form, but don't set hash)",
            widgets: [
               {
                  id: "HASH_FORM3",
                  name: "alfresco/forms/Form",
                  config: {
                     showOkButton: true,
                     okButtonPublishTopic: "SET_HASH",
                     okButtonLabel: "Set Hash",
                     showCancelButton: false,
                     useHash: true,
                     setHash: false,
                     pubSubScope: "FORM3_",
                     widgets: [
                        {
                           id: "HASH_TEXT_BOX_7",
                           name: "alfresco/forms/controls/TextBox",
                           config: {
                              label: "Field 1",
                              name: "field1",
                              value: "",
                              noValueUpdateWhenHiddenOrDisabled: true,
                              disablementConfig: {
                                 initialValue: true
                              }
                           }
                        },
                        {
                           id: "HASH_TEXT_BOX_8",
                           name: "alfresco/forms/controls/TextBox",
                           config: {
                              label: "Field 2",
                              name: "field2",
                              value: ""
                           }
                        },
                        {
                           id: "HASH_TEXT_BOX_9",
                           name: "alfresco/forms/controls/TextBox",
                           config: {
                              label: "Field 3",
                              name: "field3",
                              value: ""
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