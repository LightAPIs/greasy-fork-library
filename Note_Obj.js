// ==UserScript==
// @name         Note_Obj
// @namespace    https://greasyfork.org/zh-CN/users/193133-pana
// @homepage     https://greasyfork.org/zh-CN/users/193133-pana
// @version      5.4.0
// @description  NOTE_OBJ
// @author       pana
// @license      GNU General Public License v3.0 or later
// ==/UserScript==

typeof Vue !== 'function' && alert('The Vue.js file does not exist and script code does not work properly!!!');
const NOTE_LANG = {
  INFO: {
    version: '5.4.0',
    updated: '2021-08-14',
  },
  EN: {
    addPlaceholder: 'Please enter a new note, press Enter to save',
    groupPlaceholder: 'Please enter a new group value, press Enter to save',
    saveTagText: 'Save',
    saveTagTitle: 'Save content',
    clearTagText: 'Clear',
    clearTagTitle: 'Clear notes',
    cancelTagText: 'Cancel',
    cancelTagTitle: 'Quit',
    savePrefixText: 'Save(Prefix: "%s")',
    savePrefixTitle: 'Automatically add prefix when saving: "%s", only add while holding Ctrl',
    saveSuffixText: 'Save(Suffix: "%s")',
    saveSuffixTitle: 'Automatically add suffix when saving: "%s", only add while holding Ctrl',
    searchTagTitle: 'Search notes',
    searchTagPlaceholder: 'Search for notes, press Enter to open the result item',
    searchCloseTitle: 'Close the search box',
    userIdText: 'User ID',
    userNameText: 'User name',
    scriptIdText: 'Script ID',
    scriptNameText: 'Script name',
    userTagTableText: 'Note',
    groupText: 'Group',
    groupTitle: 'Switch group',
    searchContentText: 'Search: ',
    searchContentPlaceholder: 'Enter search content',
    rangeText: 'Range: ',
    rangeAllText: 'All',
    selectAllTitle: 'Select all',
    deselectAllText: 'Deselect all',
    deselectAllTitle: 'Deselect all content',
    deleteSelectedText: 'Delete',
    deleteSelectedTitle: 'Delete the selected item',
    clearSelectedText: 'Empty',
    clearSelectedTitle: 'Clear the note value in the selected item (Not delete)',
    moveSelectedText: 'Move',
    moveSelectedTitle: 'Move the selected item to the specified group',
    exportSelectedText: 'Export selected',
    exportSelectedTitle: 'Export the selected item to a file',
    importContentText: 'Import',
    importContentTitle: 'Import records from a file',
    manageGroupsText: 'Manage groups',
    manageGroupsTitle: 'Open the manage groups panel',
    restoreContentText: 'Restore default values',
    restoreContentTitle: 'Restore to the last saved content',
    modifyText: '(Content has been modified)',
    waitText: '(Waiting for data loading)',
    cancelContentText: 'Cancel',
    cancelContentTitle: 'Cancel changes to the content',
    saveContentText: 'Save',
    saveContentTitle: 'Save changes to the content',
    deleteConfirmText: 'Are you sure to delete this note?',
    exportNotifactionText: 'A total of %s records were exported',
    importNotifactionText: 'A total of %s records were imported',
    notObjectNotifactionText: 'The format of the content in the file is incorrect!',
    errorImportNotifactionText: 'An error occurred during the import process!',
    emptyFileNotifactionText: 'The contents of the file are empty!',
    incorrectFileSelectedNotifactionText: 'The file type selected is incorrect!',
    saveCompletedNotifactionText: 'Save completed!',
    saveErrorNotifactionText: 'Failed to save!!!',
    deleteTagNotifactionText: 'Deleted the notes',
    createNewGroupNotifactionText: 'Created a new group',
    exportConfigNotifactionText: 'Export configuration completed',
    importConfigNotifactionText: 'Import configuration completed',
    backUpNotifactionText: 'Data backup completed',
    restoreNotifactionText: 'Data recovery complete',
    syncConfigNotifactionText: 'Successfully synced configuration from other tabs',
    syncGroupNotifactionText: 'Successfully synced group values ??????from other tabs',
    syncNoteNotifactionText: 'Successfully synced note values from other tabs',
    noText: 'No',
    yesText: 'Yes',
    editText: 'Editor',
    deleteText: 'Delete',
    editTitle: 'Edit content',
    deleteTitle: 'Delete content',
    settingsHeadlineText: 'Settings',
    settingsCloseTitle: 'Close the settings panel',
    settingsAboutSearchBoxText: 'Search box',
    settingsSearchBoxShowIndexText: 'Display index values at the top',
    settingsSearchBoxCanHideSearchFrameText: 'Hide the search box when you click outside the search box',
    settingsSearchBoxShowButtonText: 'Show edit/delete button in result item',
    settingsSearchBoxShowGroupNameText:
      'The result item shows its group value (only when it is not the default group, it will not be used for search)',
    settingsSearchBoxOpenNewTabText:
      'Open result item in a new tab (When not enabled, you can press Ctrl+Enter to open the result in the background tab; press Ctrl+Shift+Enter to open the result in a new tab)',
    settingsSearchBoxEnableShortcutKeysText: 'Allow shortcut keys to open the search box (Ctrl+Shift+F)',
    settingsAboutSearchValueText: 'Search content',
    settingsSearchValueCaseSensitiveText: 'Case-sensitive letters',
    settingsSearchValueSplitText: 'Split search method ("ab cd" ==> "ab" && "cd")',
    settingsSearchValueRegularText: 'Support for regular expressions (Format: "/pattern/gim")',
    settingsAddNoteShowNoteGroupNameText:
      'Allow notes on the web page to display its group value (only when it is not the default group; When the note value is empty, it can also be used as a tag)',
    settingsAddNoteHideNoteText: 'Hide detailed remarks and show only grouping values (Turn on the above options to take effect)',
    settingsAddNoteShowNoteGroupColorText: 'Allow group colors to be applied to notes on webpages',
    settingsAddNoteShowPopoverFrameText:
      'Allow to display other notes under the same group when hovering over the note (only when it is not in the default group)',
    settingsAddNoteOpenNoteNewTabText:
      'Open other notes in a new tab (When not enabled, you can hold down Ctrl and click to open in the background tab; hold down Ctrl+Shift and click to open in a new tab)',
    settingsAddNoteCanHideAddFrameText: 'Hide the add box when you click outside the add box',
    settingsAboutAddNoteText: 'Notes',
    settingsAddNoteCommonContentText: 'Common content: ',
    settingsAddNotePrefixText: 'Prefix',
    settingsAddNoteSuffixText: 'Suffix',
    settingsAboutInterfaceText: 'Interface',
    settingsInterfaceInsertSearchButtonText:
      'Move the mouse to the lower right corner of the webpage to display the floating search button',
    settingsInterfaceInsertSettingsButtonText:
      'Move the mouse to the left side of the webpage to display the floating settings button (Always displayed when using Greasemonkey 4)',
    settingsInterfaceInsertNoteManagementButtonText:
      'Move the mouse to the left side of the webpage to display the floating note management button',
    settingsInterfaceInsertGroupManagementButtonText:
      'Move the mouse to the left side of the page to display the floating group management button',
    settingsInterfaceConfigText: 'Interface mode: ',
    settingsInterfaceBrightText: 'Bright',
    settingsInterfaceDarkText: 'Dark',
    settingsInterfaceLanguageText: 'Display language: ',
    settingsInterfaceSelectLanguageText: '--Please select language--',
    settingsAboutOtherText: 'Other Settings',
    settingsAboutStoredDataText: 'Stored data',
    settingsFrameInterfaceAutoSyncText: 'Sync data changes from other tabs',
    settingsFrameInterfaceNotSupportOptionText: 'This option is not supported by the current script handler',
    settingsStoredDataLastTimeText: 'Last modified time: ',
    settingsStoredDataExportTitle: 'Back up all stored data to file',
    settingsStoredDataImportIitle: 'Restore all stored data from a file',
    settingsAboutScriptText: 'About the script',
    settingsScriptAuthorText: 'Script author: ',
    settingsScriptVersionText: 'Script version: ',
    settingsScriptUpdatedText: 'Update date: ',
    settingsScriptCoreText: 'Core version: ',
    settingsScriptLibraryText: 'Extra library: ',
    settingsScriptHandlerText: 'Script handler: ',
    settingsScriptLanguageText: 'Language Translation: ',
    settingsScriptLanguageAuthorText: 'Google Translate',
    settingsScriptLanguageHelpText: 'Help translate',
    settingsScriptLanguageHelpTitle: 'Help translate script display language',
    settingsExportText: 'Export current config',
    settingsExportTitle: 'Export the current configuration to a file',
    settingsImportText: 'Import config',
    settingsImportTitle: 'Import configuration from a file',
    settingsCancelText: 'Close',
    settingsCancelTitle: 'Close the settings panel',
    settingsSaveText: 'Save',
    settingsSaveTitle: 'Save this configuration',
    gmSettingsText: 'Open the settings panel',
    gmManagementText: 'Open the Notes Management panel',
    gmGroupText: 'Open the Groups Management panel',
    gmSearchText: 'Open the notes search box',
    gmExportText: 'Backup data',
    gmImportText: 'Restore data',
    defaultGroupText: 'Default',
    groupNewValueText: 'New group',
    groupCreateValueText: 'New group',
    groupCreateValueTitle: 'Create a new group',
    groupValueText: 'Group name',
    groupPrimaryColorText: 'Primary color',
    groupSecondaryColorText: 'Secondary color',
    groupWeightText: 'Weight',
    selectGroupHeaderText: 'Select group',
  },
  ZH: {
    addPlaceholder: '??????????????????????????????Enter????????????',
    groupPlaceholder: '?????????????????????????????????Enter????????????',
    saveTagText: '??????',
    saveTagTitle: '????????????',
    clearTagText: '??????',
    clearTagTitle: '????????????',
    cancelTagText: '??????',
    cancelTagTitle: '??????',
    savePrefixText: '??????(??????: "%s")',
    savePrefixTitle: '???????????????????????????: "%s"????????? Ctrl ????????????',
    saveSuffixText: '??????(??????: "%s")',
    saveSuffixTitle: '???????????????????????????: "%s"????????? Ctrl ????????????',
    searchTagTitle: '????????????',
    searchTagPlaceholder: '?????????????????????Enter??????????????????',
    searchCloseTitle: '???????????????',
    userIdText: '?????? ID',
    userNameText: '?????????',
    scriptIdText: '?????? ID',
    scriptNameText: '?????????',
    userTagTableText: '?????????',
    groupText: '??????',
    groupTitle: '????????????',
    searchContentText: '??????: ',
    searchContentPlaceholder: '?????????????????????',
    rangeText: '??????: ',
    rangeAllText: '??????',
    selectAllTitle: '??????',
    deselectAllText: '????????????',
    deselectAllTitle: '????????????????????????',
    deleteSelectedText: '???????????????',
    deleteSelectedTitle: '?????????????????????',
    clearSelectedText: '???????????????',
    clearSelectedTitle: '????????????????????????????????? (????????????)',
    moveSelectedText: '???????????????',
    moveSelectedTitle: '???????????????????????????????????????',
    exportSelectedText: '???????????????',
    exportSelectedTitle: '?????????????????????????????????',
    importContentText: '????????????',
    importContentTitle: '????????????????????????',
    manageGroupsText: '????????????',
    manageGroupsTitle: '????????????????????????',
    restoreContentText: '???????????????',
    restoreContentTitle: '????????????????????????????????????',
    modifyText: '(??????????????????)',
    waitText: '(?????????????????????)',
    cancelContentText: '??????',
    cancelContentTitle: '????????????????????????',
    saveContentText: '??????',
    saveContentTitle: '????????????????????????',
    deleteConfirmText: '????????????????????????',
    exportNotifactionText: '???????????? %s ?????????',
    importNotifactionText: '???????????? %s ?????????',
    notObjectNotifactionText: '????????????????????????????????????',
    errorImportNotifactionText: '????????????????????????????????????',
    emptyFileNotifactionText: '???????????????????????????',
    incorrectFileSelectedNotifactionText: '?????????????????????????????????',
    saveCompletedNotifactionText: '???????????????',
    saveErrorNotifactionText: '?????????????????????',
    deleteTagNotifactionText: '???????????????',
    createNewGroupNotifactionText: '?????????????????????',
    exportConfigNotifactionText: '??????????????????',
    importConfigNotifactionText: '??????????????????',
    backUpNotifactionText: '??????????????????',
    restoreNotifactionText: '??????????????????',
    syncConfigNotifactionText: '?????????????????????????????????????????????',
    syncGroupNotifactionText: '????????????????????????????????????????????????',
    syncNoteNotifactionText: '????????????????????????????????????????????????',
    noText: '???',
    yesText: '???',
    editText: '??????',
    deleteText: '??????',
    editTitle: '????????????',
    deleteTitle: '????????????',
    settingsHeadlineText: '??????',
    settingsCloseTitle: '??????????????????',
    settingsAboutSearchBoxText: '?????????',
    settingsSearchBoxShowIndexText: '????????????????????????',
    settingsSearchBoxCanHideSearchFrameText: '???????????????????????????????????????',
    settingsSearchBoxShowButtonText: '???????????????????????????/????????????',
    settingsSearchBoxShowGroupNameText: '??????????????????????????? (?????????????????????????????????????????????)',
    settingsSearchBoxOpenNewTabText:
      '????????????????????????????????? (??????????????????????????? Ctrl+Enter ??????????????????????????????????????? Ctrl+Shift+Enter ??????????????????????????????)',
    settingsSearchBoxEnableShortcutKeysText: '???????????????????????????????????? (Ctrl+Shift+F)',
    settingsAboutSearchValueText: '????????????',
    settingsSearchValueCaseSensitiveText: '?????????????????????',
    settingsSearchValueSplitText: '????????????????????? ("ab cd" ==> "ab" && "cd")',
    settingsSearchValueRegularText: '??????????????????????????? (??????: "/pattern/gim")',
    settingsAddNoteShowNoteGroupNameText: '?????????????????????????????????????????? (????????????????????????????????????????????????????????????????????????)',
    settingsAddNoteHideNoteText: '???????????????????????????????????????????????? (??????????????????????????????)',
    settingsAddNoteShowNoteGroupColorText: '????????????????????????????????????????????????',
    settingsAddNoteShowPopoverFrameText: '???????????????????????????????????????????????????????????? (?????????????????????)',
    settingsAddNoteOpenNoteNewTabText:
      '???????????????????????????????????? (??????????????????????????? Ctrl ?????????????????????????????????????????? Ctrl+Shift ?????????????????????????????????)',
    settingsAddNoteCanHideAddFrameText: '???????????????????????????????????????',
    settingsAboutAddNoteText: '??????',
    settingsAddNoteCommonContentText: '????????????: ',
    settingsAddNotePrefixText: '??????',
    settingsAddNoteSuffixText: '??????',
    settingsAboutInterfaceText: '??????',
    settingsInterfaceInsertSearchButtonText: '???????????????????????????????????????????????????????????????',
    settingsInterfaceInsertSettingsButtonText: '???????????????????????????????????????????????????????????? (?????? Greasemonkey 4 ???????????????)',
    settingsInterfaceInsertNoteManagementButtonText: '??????????????????????????????????????????????????????????????????',
    settingsInterfaceInsertGroupManagementButtonText: '??????????????????????????????????????????????????????????????????',
    settingsInterfaceConfigText: '????????????: ',
    settingsInterfaceBrightText: '??????',
    settingsInterfaceDarkText: '??????',
    settingsInterfaceLanguageText: '????????????: ',
    settingsInterfaceSelectLanguageText: '--???????????????--',
    settingsAboutOtherText: '????????????',
    settingsAboutStoredDataText: '????????????',
    settingsFrameInterfaceAutoSyncText: '??????????????????????????????????????????',
    settingsFrameInterfaceNotSupportOptionText: '???????????????????????????????????????',
    settingsStoredDataLastTimeText: '??????????????????: ',
    settingsStoredDataExportTitle: '????????????????????????????????????',
    settingsStoredDataImportIitle: '????????????????????????????????????',
    settingsAboutScriptText: '????????????',
    settingsScriptAuthorText: '????????????: ',
    settingsScriptVersionText: '????????????: ',
    settingsScriptUpdatedText: '????????????: ',
    settingsScriptCoreText: '????????????: ',
    settingsScriptLibraryText: '?????????: ',
    settingsScriptHandlerText: '???????????????: ',
    settingsScriptLanguageText: '????????????: ',
    settingsScriptLanguageAuthorText: '???',
    settingsScriptLanguageHelpText: '????????????',
    settingsScriptLanguageHelpTitle: '??????????????????????????????',
    settingsExportText: '??????????????????',
    settingsExportTitle: '?????????????????????????????????',
    settingsImportText: '????????????',
    settingsImportTitle: '????????????????????????',
    settingsCancelText: '??????',
    settingsCancelTitle: '??????????????????',
    settingsSaveText: '??????',
    settingsSaveTitle: '??????????????????',
    gmSettingsText: '??????????????????',
    gmManagementText: '????????????????????????',
    gmGroupText: '????????????????????????',
    gmSearchText: '?????????????????????',
    gmExportText: '????????????',
    gmImportText: '????????????',
    defaultGroupText: '????????????',
    groupNewValueText: '????????????',
    groupCreateValueText: '????????????',
    groupCreateValueTitle: '??????????????????',
    groupValueText: '?????????',
    groupPrimaryColorText: '????????????',
    groupSecondaryColorText: '????????????',
    groupWeightText: '??????',
    selectGroupHeaderText: '????????????',
  },
  ZH_TW: {
    addPlaceholder: '??????????????????????????????Enter????????????',
    groupPlaceholder: '?????????????????????????????????Enter????????????',
    saveTagText: '??????',
    saveTagTitle: '????????????',
    clearTagText: '??????',
    clearTagTitle: '????????????',
    cancelTagText: '??????',
    cancelTagTitle: '??????',
    savePrefixText: '??????(??????: "%s")',
    savePrefixTitle: '???????????????????????????: "%s"????????? Ctrl ????????????',
    saveSuffixText: '??????(??????: "%s")',
    saveSuffixTitle: '???????????????????????????: "%s"????????? Ctrl ????????????',
    searchTagTitle: '????????????',
    searchTagPlaceholder: '?????????????????????Enter?????????????????????',
    searchCloseTitle: '???????????????',
    userIdText: '?????? ID',
    userNameText: '?????????',
    scriptIdText: '?????? ID',
    scriptNameText: '?????????',
    userTagTableText: '?????????',
    groupText: '??????',
    groupTitle: '????????????',
    searchContentText: '??????: ',
    searchContentPlaceholder: '?????????????????????',
    rangeText: '??????: ',
    rangeAllText: '??????',
    selectAllTitle: '????????????',
    deselectAllText: '??????????????????',
    deselectAllTitle: '????????????????????????',
    deleteSelectedText: '???????????????',
    deleteSelectedTitle: '??????????????????',
    clearSelectedText: '???????????????',
    clearSelectedTitle: '???????????????????????????????????? (????????????)',
    moveSelectedText: '???????????????',
    moveSelectedTitle: '??????????????????????????????????????????',
    exportSelectedText: '???????????????',
    exportSelectedTitle: '??????????????????????????????',
    importContentText: '????????????',
    importContentTitle: '?????????????????????',
    manageGroupsText: '????????????',
    manageGroupsTitle: '????????????????????????',
    restoreContentText: '???????????????',
    restoreContentTitle: '??????????????????????????????',
    modifyText: '(??????????????????)',
    waitText: '(?????????????????????)',
    cancelContentText: '??????',
    cancelContentTitle: '????????????????????????',
    saveContentText: '??????',
    saveContentTitle: '????????????????????????',
    deleteConfirmText: '?????????????????????????????????',
    exportNotifactionText: '??????????????? %s ?????????',
    importNotifactionText: '??????????????? %s ?????????',
    notObjectNotifactionText: '??????????????????????????????',
    errorImportNotifactionText: '??????????????????????????????',
    emptyFileNotifactionText: '?????????????????????',
    incorrectFileSelectedNotifactionText: '?????????????????????????????????',
    saveCompletedNotifactionText: '???????????????',
    saveErrorNotifactionText: '?????????????????????',
    deleteTagNotifactionText: '???????????????',
    createNewGroupNotifactionText: '?????????????????????',
    exportConfigNotifactionText: '?????????????????????',
    importConfigNotifactionText: '?????????????????????',
    backUpNotifactionText: '??????????????????',
    restoreNotifactionText: '??????????????????',
    syncConfigNotifactionText: '???????????????????????????????????????',
    syncGroupNotifactionText: '??????????????????????????????????????????',
    syncNoteNotifactionText: '????????????????????????????????????????????????',
    noText: '???',
    yesText: '???',
    editText: '??????',
    deleteText: '??????',
    editTitle: '????????????',
    deleteTitle: '????????????',
    settingsHeadlineText: '??????',
    settingsCloseTitle: '??????????????????',
    settingsAboutSearchBoxText: '?????????',
    settingsSearchBoxShowIndexText: '????????????????????????',
    settingsSearchBoxCanHideSearchFrameText: '??????????????????????????????????????????',
    settingsSearchBoxShowButtonText: '??????????????????????????????/????????????',
    settingsSearchBoxShowGroupNameText: '?????????????????????????????? (?????????????????????????????????????????????)',
    settingsSearchBoxOpenNewTabText:
      '???????????????????????????????????? (??????????????????????????? Ctrl+Enter ??????????????????????????????????????? Ctrl+Shift+Enter ??????????????????????????????)',
    settingsSearchBoxEnableShortcutKeysText: '???????????????????????????????????? (Ctrl+Shift+F)',
    settingsAboutSearchValueText: '????????????',
    settingsSearchValueCaseSensitiveText: '????????????????????????',
    settingsSearchValueSplitText: '????????????????????? ("ab cd" ==> "ab" && "cd")',
    settingsSearchValueRegularText: '????????????????????? (??????: "/pattern/gim")',
    settingsAddNoteShowNoteGroupNameText: '?????????????????????????????????????????? (????????????????????????????????????????????????????????????????????????)',
    settingsAddNoteHideNoteText: '???????????????????????????????????????????????? (??????????????????????????????)',
    settingsAddNoteShowNoteGroupColorText: '????????????????????????????????????????????????',
    settingsAddNoteShowPopoverFrameText: '???????????????????????????????????????????????????????????? (?????????????????????)',
    settingsAddNoteOpenNoteNewTabText:
      '???????????????????????????????????? (??????????????????????????? Ctrl ?????????????????????????????????????????? Ctrl+Shift ?????????????????????????????????)',
    settingsAddNoteCanHideAddFrameText: '???????????????????????????????????????',
    settingsAboutAddNoteText: '??????',
    settingsAddNoteCommonContentText: '????????????: ',
    settingsAddNotePrefixText: '??????',
    settingsAddNoteSuffixText: '??????',
    settingsAboutInterfaceText: '??????',
    settingsInterfaceInsertSearchButtonText: '???????????????????????????????????????????????????????????????',
    settingsInterfaceInsertSettingsButtonText: '???????????????????????????????????????????????????????????? (?????? Greasemonkey 4 ???????????????)',
    settingsInterfaceInsertNoteManagementButtonText: '??????????????????????????????????????????????????????????????????',
    settingsInterfaceInsertGroupManagementButtonText: '??????????????????????????????????????????????????????????????????',
    settingsInterfaceConfigText: '????????????: ',
    settingsInterfaceBrightText: '??????',
    settingsInterfaceDarkText: '??????',
    settingsInterfaceLanguageText: '????????????: ',
    settingsInterfaceSelectLanguageText: '--???????????????--',
    settingsAboutOtherText: '????????????',
    settingsAboutStoredDataText: '????????????',
    settingsFrameInterfaceAutoSyncText: '??????????????????????????????????????????',
    settingsFrameInterfaceNotSupportOptionText: '???????????????????????????????????????',
    settingsStoredDataLastTimeText: '??????????????????: ',
    settingsStoredDataExportTitle: '????????????????????????????????????',
    settingsStoredDataImportIitle: '????????????????????????????????????',
    settingsAboutScriptText: '????????????',
    settingsScriptAuthorText: '????????????: ',
    settingsScriptVersionText: '????????????: ',
    settingsScriptUpdatedText: '????????????: ',
    settingsScriptCoreText: '????????????: ',
    settingsScriptLibraryText: '?????????: ',
    settingsScriptHandlerText: '???????????????: ',
    settingsScriptLanguageText: '????????????: ',
    settingsScriptLanguageAuthorText: 'Google Translate',
    settingsScriptLanguageHelpText: '????????????',
    settingsScriptLanguageHelpTitle: '??????????????????????????????',
    settingsExportText: '??????????????????',
    settingsExportTitle: '??????????????????????????????',
    settingsImportText: '????????????',
    settingsImportTitle: '?????????????????????',
    settingsCancelText: '??????',
    settingsCancelTitle: '??????????????????',
    settingsSaveText: '??????',
    settingsSaveTitle: '??????????????????',
    gmSettingsText: '??????????????????',
    gmManagementText: '????????????????????????',
    gmGroupText: '????????????????????????',
    gmSearchText: '?????????????????????',
    gmExportText: '????????????',
    gmImportText: '????????????',
    defaultGroupText: '????????????',
    groupNewValueText: '????????????',
    groupCreateValueText: '????????????',
    groupCreateValueTitle: '??????????????????',
    groupValueText: '?????????',
    groupPrimaryColorText: '????????????',
    groupSecondaryColorText: '????????????',
    groupWeightText: '??????',
    selectGroupHeaderText: '????????????',
  },
  JA: {
    addPlaceholder: '?????????????????????????????????Enter??????????????????????????????????????????',
    groupPlaceholder: '??????????????????????????????????????????Enter??????????????????????????????????????????',
    saveTagText: '??????',
    saveTagTitle: '????????????????????????',
    clearTagText: '?????????',
    clearTagTitle: '????????????',
    cancelTagText: '???????????????',
    cancelTagTitle: '??????',
    savePrefixText: '??????(?????????: "%s")',
    savePrefixTitle: '????????????????????????????????????????????????: "%s"???Ctrl??????????????????????????????????????????',
    saveSuffixText: '??????(?????????: "%s")',
    saveSuffixTitle: '????????????????????????????????????????????????: "%s"???Ctrl??????????????????????????????????????????',
    searchTagTitle: '?????????????????????',
    searchTagPlaceholder: '????????????????????????Enter?????????????????????????????????????????????',
    searchCloseTitle: '??????????????????????????????',
    userIdText: '????????? ID',
    userNameText: '???????????????',
    scriptIdText: '??????????????? ID',
    scriptNameText: '??????????????????',
    userTagTableText: '?????????',
    groupText: '????????????',
    groupTitle: '????????????????????????',
    searchContentText: '??????: ',
    searchContentPlaceholder: '???????????????????????????',
    rangeText: '??????: ',
    rangeAllText: '??????',
    selectAllTitle: '??????',
    deselectAllText: '?????????????????????',
    deselectAllTitle: '???????????????????????????????????????????????????',
    deleteSelectedText: '????????????',
    deleteSelectedTitle: '????????????????????????????????????',
    clearSelectedText: '????????????',
    clearSelectedTitle: '??????????????????????????????????????????????????? (???????????????)',
    moveSelectedText: '????????????',
    moveSelectedTitle: '?????????????????????????????????????????????????????????????????????',
    exportSelectedText: '????????????',
    exportSelectedTitle: '?????????????????????????????????????????????????????????',
    importContentText: '???????????????',
    importContentTitle: '?????????????????????????????????????????????',
    manageGroupsText: '??????????????????',
    manageGroupsTitle: '????????????????????????????????????',
    restoreContentText: '????????????????????????',
    restoreContentTitle: '?????????????????????????????????????????????',
    modifyText: '(????????????????????????)',
    waitText: '(???????????????????????????????????????)',
    cancelContentText: '???????????????',
    cancelContentTitle: '??????????????????????????????',
    saveContentText: '??????',
    saveContentTitle: '??????????????????????????????',
    deleteConfirmText: '?????????????????????????????????????????????',
    exportNotifactionText: '%s ????????????????????????????????????',
    importNotifactionText: '%s ?????????????????????????????????',
    notObjectNotifactionText: '?????????????????????????????????????????????????????????????????????',
    errorImportNotifactionText: '?????????????????????????????????????????????',
    emptyFileNotifactionText: '????????????????????????????????????',
    incorrectFileSelectedNotifactionText: '??????????????????????????????????????????????????????????????????',
    saveCompletedNotifactionText: '???????????????',
    saveErrorNotifactionText: '?????????????????????',
    deleteTagNotifactionText: '?????????????????????',
    createNewGroupNotifactionText: '??????????????????????????????????????????',
    exportConfigNotifactionText: '??????????????????',
    importConfigNotifactionText: '??????????????????',
    backUpNotifactionText: '???????????????????????????????????????????????????',
    restoreNotifactionText: '????????????????????????????????????',
    syncConfigNotifactionText: '?????????????????????????????????????????????????????????????????????',
    syncGroupNotifactionText: '??????????????????????????????????????????????????????????????????',
    syncNoteNotifactionText: '???????????????????????????????????????????????????????????????',
    noText: '??????',
    yesText: '??????',
    editText: '??????',
    deleteText: '??????',
    editTitle: '?????????????????????',
    deleteTitle: '?????????????????????',
    settingsHeadlineText: '?????????',
    settingsCloseTitle: '?????????????????????????????????',
    settingsAboutSearchBoxText: '????????????',
    settingsSearchBoxShowIndexText: '????????????????????????????????????????????????',
    settingsSearchBoxCanHideSearchFrameText: '??????????????????????????????????????????????????????????????????????????????',
    settingsSearchBoxShowButtonText: '?????????????????????/????????????????????????????????????',
    settingsSearchBoxShowGroupNameText:
      '???????????????????????????????????????????????????????????? (???????????????????????????????????????????????????????????????????????????????????????)',
    settingsSearchBoxOpenNewTabText:
      '????????????????????????????????????????????? (????????????????????????????????????Ctrl+Enter ????????????????????????????????????????????????????????????????????????????????????Ctrl+Shift+Enter ??????????????????????????????????????????????????????????????????)',
    settingsSearchBoxEnableShortcutKeysText: '?????????????????????????????????????????????????????????????????????????????? (Ctrl+Shift+F)',
    settingsAboutSearchValueText: '????????????',
    settingsSearchValueCaseSensitiveText: '????????????????????????????????????????????????',
    settingsSearchValueSplitText: '????????????????????? ("ab cd" ==> "ab" && "cd")',
    settingsSearchValueRegularText: '???????????????????????????????????? (??????????????????: "/pattern/gim")',
    settingsAddNoteShowNoteGroupNameText:
      'Web??????????????????????????????????????????????????????????????? (???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????)',
    settingsAddNoteHideNoteText:
      '??????????????????????????????????????????????????????????????????????????????????????? (?????????????????????????????????????????????????????????????????????)',
    settingsAddNoteShowNoteGroupColorText: '??????????????????????????????????????????????????????????????????????????????????????????',
    settingsAddNoteShowPopoverFrameText:
      '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? (???????????????????????????????????????????????????)',
    settingsAddNoteOpenNoteNewTabText:
      '??????????????????????????????????????? (???????????????????????????????????????Ctrl ?????????????????????????????????????????????????????????????????????????????????????????????????????????Ctrl+ Shift ???????????????????????????????????????????????????????????????????????????????????????)',
    settingsAddNoteCanHideAddFrameText: '??????????????????????????????????????????????????????????????????????????????',
    settingsAboutAddNoteText: '?????????',
    settingsAddNoteCommonContentText: '????????????????????????: ',
    settingsAddNotePrefixText: '?????????',
    settingsAddNoteSuffixText: '?????????',
    settingsAboutInterfaceText: '????????????????????????',
    settingsInterfaceInsertSearchButtonText: '????????????Web?????????????????????????????????????????????????????????????????????????????????????????????',
    settingsInterfaceInsertSettingsButtonText:
      '????????????Web?????????????????????????????????????????????????????????????????????????????????????????? (Greasemonkey 4 ??????????????????????????????????????????????????????)',
    settingsInterfaceInsertNoteManagementButtonText: '????????????Web???????????????????????????????????????????????????????????????????????????????????????????????????',
    settingsInterfaceInsertGroupManagementButtonText: '??????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
    settingsInterfaceConfigText: '??????????????????????????????: ',
    settingsInterfaceBrightText: '?????????',
    settingsInterfaceDarkText: '?????????',
    settingsInterfaceLanguageText: '????????????: ',
    settingsInterfaceSelectLanguageText: '--?????????????????????????????????--',
    settingsAboutOtherText: '????????????????????????',
    settingsAboutStoredDataText: '????????????????????????',
    settingsFrameInterfaceAutoSyncText: '?????????????????????????????????????????????',
    settingsFrameInterfaceNotSupportOptionText: '???????????????????????????????????????????????????????????????????????????????????????????????????',
    settingsStoredDataLastTimeText: '??????????????????: ',
    settingsStoredDataExportTitle: '????????????????????????????????????????????????????????????????????????????????????',
    settingsStoredDataImportIitle: '?????????????????????????????????????????????????????????????????????',
    settingsAboutScriptText: '???????????????????????????',
    settingsScriptAuthorText: '?????????: ',
    settingsScriptVersionText: '??????????????????????????????: ',
    settingsScriptUpdatedText: '?????????: ',
    settingsScriptCoreText: '?????????????????????: ',
    settingsScriptLibraryText: '?????????????????????: ',
    settingsScriptHandlerText: '??????????????????????????????: ',
    settingsScriptLanguageText: '????????????: ',
    settingsScriptLanguageAuthorText: 'Google Translate',
    settingsScriptLanguageHelpText: '??????????????????',
    settingsScriptLanguageHelpTitle: '?????????????????????????????????????????????',
    settingsExportText: '??????????????????????????????',
    settingsExportTitle: '?????????????????????????????????????????????',
    settingsImportText: '???????????????',
    settingsImportTitle: '???????????????????????????????????????',
    settingsCancelText: '?????????',
    settingsCancelTitle: '?????????????????????????????????',
    settingsSaveText: '??????',
    settingsSaveTitle: '?????????????????????????????????',
    gmSettingsText: '???????????????????????????',
    gmManagementText: '??????????????????????????????',
    gmGroupText: '????????????????????????????????????',
    gmSearchText: '?????????????????????????????????',
    gmExportText: '???????????????????????????',
    gmImportText: '????????????????????????',
    defaultGroupText: '???????????????',
    groupNewValueText: '?????????????????????',
    groupCreateValueText: '?????????????????????',
    groupCreateValueTitle: '??????????????????????????????',
    groupValueText: '???????????????',
    groupPrimaryColorText: '?????????',
    groupSecondaryColorText: '???????????????',
    groupWeightText: '??????',
    selectGroupHeaderText: '?????????????????????',
  },
  KO: {
    addPlaceholder: '??? ????????? ???????????? Enter ?????? ?????? ???????????????.',
    groupPlaceholder: '??? ?????? ?????? ???????????? Enter??? ?????? ??????????????????.',
    saveTagText: '??????',
    saveTagTitle: '????????? ??????',
    clearTagText: '??????',
    clearTagTitle: '?????? ?????????',
    cancelTagText: '??????',
    cancelTagTitle: '?????????',
    savePrefixText: '??????(?????????: "%s")',
    savePrefixTitle: '?????? ??? ????????? ?????? ??????: "%s", Ctrl ?????? ?????? ??????????????? ??????',
    saveSuffixText: '??????(?????????: "%s")',
    saveSuffixTitle: '?????? ??? ???????????? ????????? ??????: "%s", Ctrl ?????? ?????? ??????????????? ??????',
    searchTagTitle: '?????? ??????',
    searchTagPlaceholder: '????????? ???????????? Enter ?????? ?????? ?????? ????????? ?????? ???',
    searchCloseTitle: '?????? ?????? ??????',
    userIdText: '????????? ID',
    userNameText: '????????? ??????',
    scriptIdText: '???????????? ID',
    scriptNameText: '?????? ??????',
    userTagTableText: '?????? ???',
    groupText: '??????',
    groupTitle: '?????? ??????',
    searchContentText: '??????: ',
    searchContentPlaceholder: '?????? ?????? ??????',
    rangeText: '??????: ',
    rangeAllText: '??????',
    selectAllTitle: '??????',
    deselectAllText: '?????? ?????? ??????',
    deselectAllTitle: '?????? ?????? ??????',
    deleteSelectedText: '?????? ??????',
    deleteSelectedTitle: '????????? ?????? ??????',
    clearSelectedText: '?????????',
    clearSelectedTitle: '????????? ????????? ?????? ??? ????????? (?????? ??????)',
    moveSelectedText: '?????? ??????',
    moveSelectedTitle: '????????? ????????? ????????? ???????????? ??????',
    exportSelectedText: '?????? ????????????',
    exportSelectedTitle: '????????? ????????? ????????? ????????????',
    importContentText: '?????? ??????',
    importContentTitle: '???????????? ????????? ????????????',
    manageGroupsText: '?????? ??????',
    manageGroupsTitle: '?????? ?????? ?????? ??????',
    restoreContentText: '????????? ??????',
    restoreContentTitle: '??????????????? ????????? ???????????? ??????',
    modifyText: '(????????? ?????????????????????)',
    waitText: '(??????????????? ?????? ???)',
    cancelContentText: '??????',
    cancelContentTitle: '????????? ?????? ??????',
    saveContentText: '??????',
    saveContentTitle: '???????????? ?????? ?????? ?????? ??????',
    deleteConfirmText: '??? ?????? ?????? ???????',
    exportNotifactionText: '??? %s ????????? ????????????',
    importNotifactionText: '??? %s ????????? ????????????',
    notObjectNotifactionText: '????????? ?????? ???????????? ????????? ???????????? ????????????!',
    errorImportNotifactionText: '???????????? ?????? ????????? ??????????????????!',
    emptyFileNotifactionText: '????????? ????????? ?????? ????????????!',
    incorrectFileSelectedNotifactionText: '????????? ?????? ????????? ??????????????????!',
    saveCompletedNotifactionText: '?????? ??????!',
    saveErrorNotifactionText: '???????????? ???????????????!',
    deleteTagNotifactionText: '????????? ?????????????????????.',
    createNewGroupNotifactionText: '??? ????????? ??????????????????.',
    exportConfigNotifactionText: '???????????? ?????? ??????',
    importConfigNotifactionText: '???????????? ?????? ??????',
    backUpNotifactionText: '????????? ?????? ??????',
    restoreNotifactionText: '????????? ?????? ??????',
    syncConfigNotifactionText: '?????? ??? ??????????????? ????????? ??????????????? ?????????????????????.',
    syncGroupNotifactionText: '?????? ????????? ?????? ?????? ??????????????? ?????????????????????.',
    syncNoteNotifactionText: '?????? ?????? ?????? ?????? ??????????????? ????????????????????????.',
    noText: '?????????',
    yesText: '???',
    editText: '??????',
    deleteText: '??????',
    editTitle: '????????? ??????',
    deleteTitle: '????????? ??????',
    settingsHeadlineText: '??????',
    settingsCloseTitle: '?????? ?????? ??????',
    settingsAboutSearchBoxText: '?????? ???',
    settingsSearchBoxShowIndexText: '??? ?????? ????????? ??? ??????',
    settingsSearchBoxCanHideSearchFrameText: '?????? ?????? ????????? ????????? ??? ?????? ?????? ?????????',
    settingsSearchBoxShowButtonText: '?????? ????????? ??????/?????? ?????? ??????',
    settingsSearchBoxShowGroupNameText: '?????? ????????? ?????? ?????? ??????????????? (?????? ????????? ?????? ???????????? ????????? ???????????? ??????)',
    settingsSearchBoxOpenNewTabText:
      '??? ????????? ?????? ?????? ?????? (??????????????? ?????? ?????? Ctrl+Enter ??? ?????? ?????? ????????? ????????? ??? ??? ????????? Ctrl+Shift+Enter ??? ?????? ??? ????????? ????????? ??? ??? ????????????)',
    settingsSearchBoxEnableShortcutKeysText: '?????? ?????? ?????? ???????????? ?????? ?????? ?????? ?????? (Ctrl+Shift+F)',
    settingsAboutSearchValueText: '?????? ??????',
    settingsSearchValueCaseSensitiveText: '???????????? ??????',
    settingsSearchValueSplitText: '?????? ?????? ?????? ("ab cd" ==> "ab" && "cd")',
    settingsSearchValueRegularText: '????????? ?????? ?????? (??????: "/pattern/gim")',
    settingsAddNoteShowNoteGroupNameText:
      '??? ???????????? ????????? ?????? ?????? ??????????????? ?????? (?????? ????????? ?????? ????????????. ?????? ?????? ?????? ????????? ??????????????? ????????? ??? ????????????)',
    settingsAddNoteHideNoteText: '????????? ????????? ????????? ????????? ?????? ?????? (??????????????? ?????? ????????? ????????????.)',
    settingsAddNoteShowNoteGroupColorText: '??? ???????????? ????????? ?????? ????????? ?????? ??? ??? ????????????',
    settingsAddNoteShowPopoverFrameText:
      '?????? ?????? ???????????? ????????? ??? ????????? ?????? ????????? ?????? ????????? ??????????????? ?????? (?????? ??????????????? ???????????? ??????)',
    settingsAddNoteOpenNoteNewTabText:
      '??? ????????? ?????? ?????? ?????? (??????????????? ?????? ?????? Ctrl ?????? ?????? ???????????? ???????????? ?????? ????????? ??? ??? ????????????. Ctrl+Shift ??? ?????? ???????????? ???????????? ??? ????????? ??? ??? ????????????)',
    settingsAddNoteCanHideAddFrameText: '?????? ?????? ????????? ????????? ??? ?????? ?????? ?????????',
    settingsAboutAddNoteText: '?????????',
    settingsAddNoteCommonContentText: '?????? ?????????: ',
    settingsAddNotePrefixText: '?????????',
    settingsAddNoteSuffixText: '?????????',
    settingsAboutInterfaceText: '??????',
    settingsInterfaceInsertSearchButtonText: '??? ????????? ????????? ???????????? ???????????? ???????????? ????????? ?????? ????????? ???????????????',
    settingsInterfaceInsertSettingsButtonText:
      '??? ???????????? ???????????? ???????????? ???????????? ????????? ?????? ????????? ??????????????? (Greasemonkey 4 ??? ????????? ??? ?????? ???????????????)',
    settingsInterfaceInsertNoteManagementButtonText: '??? ????????? ???????????? ???????????? ???????????? ????????? ?????? ?????? ????????? ???????????????',
    settingsInterfaceInsertGroupManagementButtonText: '???????????? ????????? ???????????? ???????????? ????????? ?????? ?????? ????????? ???????????????',
    settingsInterfaceConfigText: '??????????????? ??????: ',
    settingsInterfaceBrightText: '??????',
    settingsInterfaceDarkText: '?????????',
    settingsInterfaceLanguageText: '?????? ??????: ',
    settingsInterfaceSelectLanguageText: '--????????? ???????????????--',
    settingsAboutOtherText: '?????? ?????? ??????',
    settingsAboutStoredDataText: '????????? ?????? ??????',
    settingsFrameInterfaceAutoSyncText: '?????? ?????? ????????? ?????? ?????? ?????????',
    settingsFrameInterfaceNotSupportOptionText: '?????? ???????????? ??????????????? ????????? ???????????? ????????????',
    settingsStoredDataLastTimeText: '????????? ?????? ??????: ',
    settingsStoredDataExportTitle: '????????? ?????? ???????????? ????????? ??????',
    settingsStoredDataImportIitle: '???????????? ????????? ?????? ????????? ??????',
    settingsAboutScriptText: '???????????? ??????',
    settingsScriptAuthorText: '???????????? ?????????: ',
    settingsScriptVersionText: '???????????? ??????: ',
    settingsScriptUpdatedText: '???????????? ??????: ',
    settingsScriptCoreText: '?????? ??????: ',
    settingsScriptLibraryText: '?????? ???????????????: ',
    settingsScriptHandlerText: '???????????? ?????????: ',
    settingsScriptLanguageText: '?????? ??????: ',
    settingsScriptLanguageAuthorText: 'Google Translate',
    settingsScriptLanguageHelpText: '?????? ??????',
    settingsScriptLanguageHelpTitle: '???????????? ?????? ?????? ?????? ??????',
    settingsExportText: '?????? ?????? ????????????',
    settingsExportTitle: '?????? ????????? ????????? ????????????',
    settingsImportText: '?????? ????????????',
    settingsImportTitle: '???????????? ?????? ????????????',
    settingsCancelText: '??????',
    settingsCancelTitle: '?????? ?????? ??????',
    settingsSaveText: '??????',
    settingsSaveTitle: '??? ?????? ??????',
    gmSettingsText: '??? ?????? ??????',
    gmManagementText: '?????? ?????? ?????? ??????',
    gmGroupText: '?????? ?????? ?????? ??????',
    gmSearchText: '?????? ?????? ?????? ??????',
    gmExportText: '?????? ?????????',
    gmImportText: '????????? ??????',
    defaultGroupText: '?????????',
    groupNewValueText: '??? ??????',
    groupCreateValueText: '??? ??????',
    groupCreateValueTitle: '??? ?????? ?????????',
    groupValueText: '?????? ??????',
    groupPrimaryColorText: '?????? ??????',
    groupSecondaryColorText: '?????? ??????',
    groupWeightText: '?????????',
    selectGroupHeaderText: '?????? ??????',
  },
  FR: {
    addPlaceholder: 'Veuillez saisir une nouvelle note',
    groupPlaceholder: 'Veuillez saisir une nouvelle valeur de groupe',
    saveTagText: 'sauver',
    saveTagTitle: 'Enregistrer le contenu',
    clearTagText: 'Supprimer',
    clearTagTitle: 'Note Supprimer',
    cancelTagText: 'Annuler',
    cancelTagTitle: 'quitter',
    savePrefixText: 'Enregistrer(pr??fixe: "%s")',
    savePrefixTitle: 'Ajouter automatiquement un pr??fixe lors de l\'enregistrement: "%s", n\'ajoutez que tout en maintenant Ctrl',
    saveSuffixText: 'Enregistrer(suffixe: "%s")',
    saveSuffixTitle: 'Ajouter automatiquement un suffixe lors de l\'enregistrement: "%s", n\'ajoutez que tout en maintenant Ctrl',
    searchTagTitle: 'Rechercher des notes',
    searchTagPlaceholder: 'Recherchez des notes, appuyez sur Entr??e pour ouvrir',
    searchCloseTitle: 'Fermer le champ de recherche',
    userIdText: 'ID utilisateur',
    userNameText: "Nom d'utilisateur",
    scriptIdText: 'ID de script',
    scriptNameText: 'Nom du script',
    userTagTableText: 'Note',
    groupText: 'Paquet',
    groupTitle: 'Changer de groupe',
    searchContentText: 'Search: ',
    searchContentPlaceholder: 'Rechercher du contenu',
    rangeText: 'gamme: ',
    rangeAllText: 'Tout',
    selectAllTitle: 'Tout d??selectionner',
    deselectAllText: 'd??selectionner',
    deselectAllTitle: 'Annuler toutes les s??lections',
    deleteSelectedText: 'supprimer',
    deleteSelectedTitle: "Supprimer l'??l??ment s??lectionn??",
    clearSelectedText: 'Vide',
    clearSelectedTitle: "Effacer la valeur de la remarque dans l'??l??ment s??lectionn?? (Ne pas supprimer)",
    moveSelectedText: 'D??placement',
    moveSelectedTitle: "D??placer l'??l??ment s??lectionn?? vers le groupe sp??cifi??",
    exportSelectedText: 'Exporter',
    exportSelectedTitle: 'Exporter les ??l??ments s??lectionn??s vers un fichier',
    importContentText: 'Importer',
    importContentTitle: "Importer des enregistrements ?? partir d'un fichier",
    manageGroupsText: 'Groupe de gestion',
    manageGroupsTitle: 'Ouvrez le panneau du groupe de gestion',
    restoreContentText: 'R??initialiser',
    restoreContentTitle: 'Revenir au dernier contenu enregistr??',
    modifyText: '(Le contenu a ??t?? modifi??)',
    waitText: '(En attente de chargement des donn??es)',
    cancelContentText: 'Annuler',
    cancelContentTitle: 'Annuler la modification du contenu',
    saveContentText: 'Enregistrer',
    saveContentTitle: 'Enregistrer les modifications du contenu',
    deleteConfirmText: '??tes-vous s??r de vouloir supprimer cette note?',
    exportNotifactionText: 'Un total de %s enregistrements ont ??t?? export??s',
    importNotifactionText: 'Les enregistrements %s ont ??t?? import??s',
    notObjectNotifactionText: 'Le format du contenu du fichier est incorrect!',
    errorImportNotifactionText: "Une erreur s'est produite lors du processus d'importation!",
    emptyFileNotifactionText: 'Le contenu du fichier est vide!',
    incorrectFileSelectedNotifactionText: 'Le type de fichier s??lectionn?? est incorrect!',
    saveCompletedNotifactionText: 'La sauvegarde est termin??e!',
    saveErrorNotifactionText: '??chec de la sauvegarde! ! !',
    deleteTagNotifactionText: 'Note supprim??e',
    createNewGroupNotifactionText: 'Cr??er un nouveau groupe',
    exportConfigNotifactionText: "La configuration de l'exportation est termin??e",
    importConfigNotifactionText: "La configuration de l'importation est termin??e",
    backUpNotifactionText: 'Sauvegarde des donn??es termin??e',
    restoreNotifactionText: 'R??cup??ration des donn??es termin??e',
    syncConfigNotifactionText: "Configuration synchronis??e avec succ??s ?? partir d'autres onglets",
    syncGroupNotifactionText: "Valeurs de groupe synchronis??es avec succ??s ?? partir d'autres onglets",
    syncNoteNotifactionText: 'Les valeurs de remarque des autres onglets ont ??t?? synchronis??es avec succ??s',
    noText: 'non',
    yesText: 'Oui',
    editText: '??diter',
    deleteText: 'supprimer',
    editTitle: 'Modifier le contenu',
    deleteTitle: 'Supprimer le contenu',
    settingsHeadlineText: 'Mise en place',
    settingsCloseTitle: 'Fermez le panneau des param??tres',
    settingsAboutSearchBoxText: 'Barre de recherche',
    settingsSearchBoxShowIndexText: "Afficher la valeur d'index en haut",
    settingsSearchBoxCanHideSearchFrameText: 'Masquer le champ de recherche en cliquant en dehors du champ de recherche',
    settingsSearchBoxShowButtonText: "Afficher le bouton Modifier/Supprimer dans l'??l??ment de r??sultat",
    settingsSearchBoxShowGroupNameText:
      "L'??l??ment de r??sultat affiche sa valeur de groupe (Seul le regroupement autre que celui par d??faut ne sera pas utilis?? pour la recherche)",
    settingsSearchBoxOpenNewTabText:
      "Ouvrir l'??l??ment de r??sultat dans un nouvel onglet (Lorsqu'elle n'est pas activ??e, vous pouvez appuyer sur Ctrl+Enter pour ouvrir le r??sultat dans l'onglet d'arri??re-plan; appuyez sur Ctrl+Shift+Enter pour ouvrir le r??sultat dans un nouvel onglet)",
    settingsSearchBoxEnableShortcutKeysText: 'Autoriser les touches de raccourci ?? ouvrir la zone de recherche (Ctrl+Shift+F)',
    settingsAboutSearchValueText: 'Chercher',
    settingsSearchValueCaseSensitiveText: 'Sensible aux majuscules et minuscules',
    settingsSearchValueSplitText: 'M??thode de recherche fractionn??e ("ab cd" ==> "ab" && "cd")',
    settingsSearchValueRegularText: 'Soutenir l\'utilisation d\'expressions r??guli??res (format: "/pattern/gim")',
    settingsAddNoteShowNoteGroupNameText:
      "Autoriser les notes sur la page Web ?? afficher leurs valeurs de regroupement (Uniquement lorsqu'il ne s'agit pas du groupe par d??faut; lorsque la valeur de la remarque est vide, elle peut ??galement ??tre utilis??e comme ??tiquette)",
    settingsAddNoteHideNoteText:
      "Masquer les remarques d??taill??es, 'afficher que les valeurs de regroupement (Activez les options ci-dessus pour prendre effet)",
    settingsAddNoteShowNoteGroupColorText: "Autoriser l'application des couleurs de groupe aux notes sur les pages Web",
    settingsAddNoteShowPopoverFrameText:
      "Permet d'afficher d'autres notes dans le m??me groupe lors du survol de la note (Lorsque seul le regroupement n'est pas par d??faut)",
    settingsAddNoteOpenNoteNewTabText:
      "Ouvrir d'autres notes dans un nouvel onglet (Lorsqu'elle n'est pas activ??e, vous pouvez maintenir la touche Ctrl enfonc??e et cliquer pour ouvrir dans l'onglet d'arri??re-plan; maintenir enfonc??e la touche Ctrl + Maj et cliquer pour ouvrir dans un nouvel onglet)",
    settingsAddNoteCanHideAddFrameText: "Masquer la zone d'ajout lorsque vous cliquez en dehors de la zone d'ajout",
    settingsAboutAddNoteText: 'Remarques',
    settingsAddNoteCommonContentText: 'contenu: ',
    settingsAddNotePrefixText: 'Pr??fixe',
    settingsAddNoteSuffixText: 'suffixe',
    settingsAboutInterfaceText: 'Interface',
    settingsInterfaceInsertSearchButtonText:
      'D??placez la souris vers le coin inf??rieur droit de la page Web pour afficher le bouton de recherche flottant',
    settingsInterfaceInsertSettingsButtonText:
      "D??placez la souris vers le c??t?? gauche de la page Web pour afficher le bouton de param??tres flottant (Toujours affich?? lors de l'utilisation de Greasemonkey 4)",
    settingsInterfaceInsertNoteManagementButtonText:
      'D??placez la souris vers le c??t?? gauche de la page Web pour afficher le bouton de gestion des notes flottantes',
    settingsInterfaceInsertGroupManagementButtonText:
      'D??placez la souris vers le c??t?? gauche de la page pour afficher le bouton de gestion de groupe flottant',
    settingsInterfaceConfigText: "Mode d'interface: ",
    settingsInterfaceBrightText: 'Claire',
    settingsInterfaceDarkText: 'Sombre',
    settingsInterfaceLanguageText: "Langue d'affichage: ",
    settingsInterfaceSelectLanguageText: '--s??lectionner--',
    settingsAboutOtherText: 'autres r??glages',
    settingsAboutStoredDataText: 'Stockage de donn??es',
    settingsFrameInterfaceAutoSyncText: "Synchroniser les modifications de donn??es ?? partir d'autres onglets",
    settingsFrameInterfaceNotSupportOptionText: 'Le gestionnaire de scripts actuel ne prend pas en charge cette option',
    settingsStoredDataLastTimeText: 'Derni??re modification: ',
    settingsStoredDataExportTitle: 'Sauvegarder toutes les donn??es stock??es dans un fichier',
    settingsStoredDataImportIitle: 'R??cup??rer toutes les donn??es stock??es ?? partir de fichiers',
    settingsAboutScriptText: '?? propos du script',
    settingsScriptAuthorText: 'Sc??nariste: ',
    settingsScriptVersionText: 'Version du script: ',
    settingsScriptUpdatedText: 'Actualis??: ',
    settingsScriptCoreText: 'Version de base: ',
    settingsScriptLibraryText: 'Biblioth??que d??pendante: ',
    settingsScriptHandlerText: 'Directeur de script: ',
    settingsScriptLanguageText: 'Linguistique: ',
    settingsScriptLanguageAuthorText: 'decembre, Google Translate',
    settingsScriptLanguageHelpText: 'Aider ?? traduire',
    settingsScriptLanguageHelpTitle: "Aide ?? traduire la langue d'affichage des scripts",
    settingsExportText: 'Exportation',
    settingsExportTitle: 'Exporter la configuration actuelle dans un fichier',
    settingsImportText: 'Importer',
    settingsImportTitle: 'Importer la configuration ?? partir du fichier',
    settingsCancelText: 'fermer',
    settingsCancelTitle: 'Fermez le panneau des param??tres',
    settingsSaveText: 'Enregistrer',
    settingsSaveTitle: 'Sauvegarder cette configuration',
    gmSettingsText: 'Ouvrir le panneau',
    gmManagementText: 'Ouvrir le panneau des notes',
    gmGroupText: 'Ouvrir le panneau de groupe',
    gmSearchText: 'Ouvrir le champ de recherche',
    gmExportText: 'Sauvegarde des donn??es',
    gmImportText: 'R??cup??ration de donn??es',
    defaultGroupText: 'd??faut',
    groupNewValueText: 'Nouveau',
    groupCreateValueText: 'Nouveau groupe',
    groupCreateValueTitle: 'Cr??er un nouveau groupe',
    groupValueText: 'Nom de groupe',
    groupPrimaryColorText: 'Couleur principale',
    groupSecondaryColorText: 'Couleur secondaire',
    groupWeightText: 'Poids',
    selectGroupHeaderText: 'S??lectionnez un groupe',
  },
};
const NOTE_ICON = {
  SEARCH_BLUE:
    'url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9InNlYXJjaEljb25UaXRsZSIgc3Ryb2tlPSJyZ2JhKDI5LDE2MSwyNDIsMS4wMCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgZmlsbD0ibm9uZSIgY29sb3I9InJnYmEoMjksMTYxLDI0MiwxLjAwKSI+IDx0aXRsZSBpZD0ic2VhcmNoSWNvblRpdGxlIj5TZWFyY2g8L3RpdGxlPiA8cGF0aCBkPSJNMTQuNDEyMTEyMiwxNC40MTIxMTIyIEwyMCwyMCIvPiA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI2Ii8+IDwvc3ZnPg==)',
  CLOSE_GRAY:
    'url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImNsb3NlSWNvblRpdGxlIiBzdHJva2U9IiM2NjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBmaWxsPSJub25lIiBjb2xvcj0iIzY2NiI+IDx0aXRsZSBpZD0iY2xvc2VJY29uVGl0bGUiPkNsb3NlPC90aXRsZT4gPHBhdGggZD0iTTYuMzQzMTQ1NzUgNi4zNDMxNDU3NUwxNy42NTY4NTQyIDE3LjY1Njg1NDJNNi4zNDMxNDU3NSAxNy42NTY4NTQyTDE3LjY1Njg1NDIgNi4zNDMxNDU3NSIvPiA8L3N2Zz4=)',
  EDIT_BLACK:
    'url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImVkaXRJY29uVGl0bGUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBmaWxsPSJub25lIiBjb2xvcj0iIzMzMyI+IDx0aXRsZSBpZD0iZWRpdEljb25UaXRsZSI+RWRpdDwvdGl0bGU+IDxwYXRoIGQ9Ik0xOC40MTQyMTM2IDQuNDE0MjEzNTZMMTkuNTg1Nzg2NCA1LjU4NTc4NjQ0QzIwLjM2NjgzNSA2LjM2NjgzNTAyIDIwLjM2NjgzNSA3LjYzMzE2NDk4IDE5LjU4NTc4NjQgOC40MTQyMTM1Nkw4IDIwIDQgMjAgNCAxNiAxNS41ODU3ODY0IDQuNDE0MjEzNTZDMTYuMzY2ODM1IDMuNjMzMTY0OTggMTcuNjMzMTY1IDMuNjMzMTY0OTggMTguNDE0MjEzNiA0LjQxNDIxMzU2ek0xNCA2TDE4IDEwIi8+IDwvc3ZnPg==)',
  EDIT_YELLOW:
    'url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImVkaXRJY29uVGl0bGUiIHN0cm9rZT0iI0ZGRkZDQyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBmaWxsPSJub25lIiBjb2xvcj0iI0ZGRkZDQyI+IDx0aXRsZSBpZD0iZWRpdEljb25UaXRsZSI+RWRpdDwvdGl0bGU+IDxwYXRoIGQ9Ik0xOC40MTQyMTM2IDQuNDE0MjEzNTZMMTkuNTg1Nzg2NCA1LjU4NTc4NjQ0QzIwLjM2NjgzNSA2LjM2NjgzNTAyIDIwLjM2NjgzNSA3LjYzMzE2NDk4IDE5LjU4NTc4NjQgOC40MTQyMTM1Nkw4IDIwIDQgMjAgNCAxNiAxNS41ODU3ODY0IDQuNDE0MjEzNTZDMTYuMzY2ODM1IDMuNjMzMTY0OTggMTcuNjMzMTY1IDMuNjMzMTY0OTggMTguNDE0MjEzNiA0LjQxNDIxMzU2ek0xNCA2TDE4IDEwIi8+IDwvc3ZnPg==)',
  EDIT_BLUE:
    'url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImVkaXRJY29uVGl0bGUiIHN0cm9rZT0iIzIzMjlENiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBmaWxsPSJub25lIiBjb2xvcj0iIzIzMjlENiI+IDx0aXRsZSBpZD0iZWRpdEljb25UaXRsZSI+RWRpdDwvdGl0bGU+IDxwYXRoIGQ9Ik0xOC40MTQyMTM2IDQuNDE0MjEzNTZMMTkuNTg1Nzg2NCA1LjU4NTc4NjQ0QzIwLjM2NjgzNSA2LjM2NjgzNTAyIDIwLjM2NjgzNSA3LjYzMzE2NDk4IDE5LjU4NTc4NjQgOC40MTQyMTM1Nkw4IDIwIDQgMjAgNCAxNiAxNS41ODU3ODY0IDQuNDE0MjEzNTZDMTYuMzY2ODM1IDMuNjMzMTY0OTggMTcuNjMzMTY1IDMuNjMzMTY0OTggMTguNDE0MjEzNiA0LjQxNDIxMzU2ek0xNCA2TDE4IDEwIi8+IDwvc3ZnPg==)',
  DELETE_BLACK:
    'url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImJpbkljb25UaXRsZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbGw9Im5vbmUiIGNvbG9yPSIjMzMzIj4gPHRpdGxlIGlkPSJiaW5JY29uVGl0bGUiPkJpbjwvdGl0bGU+IDxwYXRoIGQ9Ik0xOSA2TDUgNk0xNCA1TDEwIDVNNiAxMEw2IDIwQzYgMjAuNjY2NjY2NyA2LjMzMzMzMzMzIDIxIDcgMjEgNy42NjY2NjY2NyAyMSAxMSAyMSAxNyAyMSAxNy42NjY2NjY3IDIxIDE4IDIwLjY2NjY2NjcgMTggMjAgMTggMTkuMzMzMzMzMyAxOCAxNiAxOCAxMCIvPiA8L3N2Zz4=)',
  DELETE_YELLOW:
    'url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImJpbkljb25UaXRsZSIgc3Ryb2tlPSIjRkZGRkNDIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbGw9Im5vbmUiIGNvbG9yPSIjRkZGRkNDIj4gPHRpdGxlIGlkPSJiaW5JY29uVGl0bGUiPkJpbjwvdGl0bGU+IDxwYXRoIGQ9Ik0xOSA2TDUgNk0xNCA1TDEwIDVNNiAxMEw2IDIwQzYgMjAuNjY2NjY2NyA2LjMzMzMzMzMzIDIxIDcgMjEgNy42NjY2NjY2NyAyMSAxMSAyMSAxNyAyMSAxNy42NjY2NjY3IDIxIDE4IDIwLjY2NjY2NjcgMTggMjAgMTggMTkuMzMzMzMzMyAxOCAxNiAxOCAxMCIvPiA8L3N2Zz4=)',
  DELETE_BLUE:
    'url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImJpbkljb25UaXRsZSIgc3Ryb2tlPSIjMjMyOUQ2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbGw9Im5vbmUiIGNvbG9yPSIjMjMyOUQ2Ij4gPHRpdGxlIGlkPSJiaW5JY29uVGl0bGUiPkJpbjwvdGl0bGU+IDxwYXRoIGQ9Ik0xOSA2TDUgNk0xNCA1TDEwIDVNNiAxMEw2IDIwQzYgMjAuNjY2NjY2NyA2LjMzMzMzMzMzIDIxIDcgMjEgNy42NjY2NjY2NyAyMSAxMSAyMSAxNyAyMSAxNy42NjY2NjY3IDIxIDE4IDIwLjY2NjY2NjcgMTggMjAgMTggMTkuMzMzMzMzMyAxOCAxNiAxOCAxMCIvPiA8L3N2Zz4=)',
  OK_YELLOW:
    'url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImNpcmNsZU9rSWNvblRpdGxlIiBzdHJva2U9IiNGRkZGQ0MiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgZmlsbD0ibm9uZSIgY29sb3I9IiNGRkZGQ0MiPiA8dGl0bGUgaWQ9ImNpcmNsZU9rSWNvblRpdGxlIj5PSzwvdGl0bGU+IDxwb2x5bGluZSBwb2ludHM9IjcgMTMgMTAgMTYgMTcgOSIvPiA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPiA8L3N2Zz4=)',
  OK_BLUE:
    'url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImNpcmNsZU9rSWNvblRpdGxlIiBzdHJva2U9IiMyMzI5RDYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgZmlsbD0ibm9uZSIgY29sb3I9IiMyMzI5RDYiPiA8dGl0bGUgaWQ9ImNpcmNsZU9rSWNvblRpdGxlIj5PSzwvdGl0bGU+IDxwb2x5bGluZSBwb2ludHM9IjcgMTMgMTAgMTYgMTcgOSIvPiA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPiA8L3N2Zz4=)',
  CHEVRON_RIGHT_WHITE:
    'url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImNoZXZyb25SaWdodEljb25UaXRsZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbGw9Im5vbmUiIGNvbG9yPSIjZmZmIj4gPHRpdGxlIGlkPSJjaGV2cm9uUmlnaHRJY29uVGl0bGUiPkNoZXZyb24gUmlnaHQ8L3RpdGxlPiA8cG9seWxpbmUgcG9pbnRzPSIxMCA2IDE2IDEyIDEwIDE4IDEwIDE4Ii8+IDwvc3ZnPg==)',
  CHEVRON_RIGHT_BLACK:
    'url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImNoZXZyb25SaWdodEljb25UaXRsZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbGw9Im5vbmUiIGNvbG9yPSIjMDAwIj4gPHRpdGxlIGlkPSJjaGV2cm9uUmlnaHRJY29uVGl0bGUiPkNoZXZyb24gUmlnaHQ8L3RpdGxlPiA8cG9seWxpbmUgcG9pbnRzPSIxMCA2IDE2IDEyIDEwIDE4IDEwIDE4Ii8+IDwvc3ZnPg==)',
  SETTINGS_BLUE:
    'url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9InNldHRpbmdzSWNvblRpdGxlIiBzdHJva2U9IiMzMzY2OTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgZmlsbD0ibm9uZSIgY29sb3I9IiMzMzY2OTkiPiA8dGl0bGUgaWQ9InNldHRpbmdzSWNvblRpdGxlIj5TZXR0aW5nczwvdGl0bGU+IDxwYXRoIGQ9Ik01LjAzNTA2NDI5LDEyLjcwNTAzMzkgQzUuMDExODc0ODQsMTIuNDczMTY5NiA1LDEyLjIzNzk3MTYgNSwxMiBDNSwxMS43NjIwMjg0IDUuMDExODc0ODQsMTEuNTI2ODMwNCA1LjAzNTA2NDI5LDExLjI5NDk2NjEgTDMuMjA1NzcxMzcsOS4yMzIwNTA4MSBMNS4yMDU3NzEzNyw1Ljc2Nzk0OTE5IEw3LjkwNjk3MTMsNi4zMjA3MDkwNCBDOC4yODcyOTEyMyw2LjA0NjEzNDIgOC42OTYyOTI5OCw1LjgwODgyMjEyIDkuMTI4NjI1MzMsNS42MTQxMjQwMiBMMTAsMyBMMTQsMyBMMTQuODcxMzc0Nyw1LjYxNDEyNDAyIEMxNS4zMDM3MDcsNS44MDg4MjIxMiAxNS43MTI3MDg4LDYuMDQ2MTM0MiAxNi4wOTMwMjg3LDYuMzIwNzA5MDQgTDE4Ljc5NDIyODYsNS43Njc5NDkxOSBMMjAuNzk0MjI4Niw5LjIzMjA1MDgxIEwxOC45NjQ5MzU3LDExLjI5NDk2NjEgQzE4Ljk4ODEyNTIsMTEuNTI2ODMwNCAxOSwxMS43NjIwMjg0IDE5LDEyIEMxOSwxMi4yMzc5NzE2IDE4Ljk4ODEyNTIsMTIuNDczMTY5NiAxOC45NjQ5MzU3LDEyLjcwNTAzMzkgTDIwLjc5NDIyODYsMTQuNzY3OTQ5MiBMMTguNzk0MjI4NiwxOC4yMzIwNTA4IEwxNi4wOTMwMjg3LDE3LjY3OTI5MSBDMTUuNzEyNzA4OCwxNy45NTM4NjU4IDE1LjMwMzcwNywxOC4xOTExNzc5IDE0Ljg3MTM3NDcsMTguMzg1ODc2IEwxNCwyMSBMMTAsMjEgTDkuMTI4NjI1MzMsMTguMzg1ODc2IEM4LjY5NjI5Mjk4LDE4LjE5MTE3NzkgOC4yODcyOTEyMywxNy45NTM4NjU4IDcuOTA2OTcxMywxNy42NzkyOTEgTDUuMjA1NzcxMzcsMTguMjMyMDUwOCBMMy4yMDU3NzEzNywxNC43Njc5NDkyIEw1LjAzNTA2NDI5LDEyLjcwNTAzMzkgWiIvPiA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIi8+IDwvc3ZnPg==)',
  TABLE_BLUE:
    'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1sYWJlbGxlZGJ5PSJ0YWJsZUhvcml6b250YWxJY29uVGl0bGUiIHN0cm9rZT0iIzAwMzM2NiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBmaWxsPSJub25lIiBjb2xvcj0iIzAwMzM2NiI+IDx0aXRsZSBpZD0idGFibGVIb3Jpem9udGFsSWNvblRpdGxlIj5EYXRhIHRhYmxlPC90aXRsZT4gPHBhdGggZD0iTTIyIDRWMTlIMkwyIDRMMjIgNFoiLz4gPGxpbmUgeDE9IjIyIiB5MT0iOSIgeDI9IjIiIHkyPSI5Ii8+IDxsaW5lIHgxPSIyMiIgeTE9IjE0IiB4Mj0iMiIgeTI9IjE0Ii8+IDxwYXRoIGQ9Ik0xMiAxOUwxMiA0Ii8+IDwvc3ZnPg==)',
  BOARD_GRAY:
    'url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImRhc2hib2FyZEljb25UaXRsZSIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbGw9Im5vbmUiIGNvbG9yPSIjMzMzMzMzIj4gPHRpdGxlIGlkPSJkYXNoYm9hcmRJY29uVGl0bGUiPkRhc2hib2FyZDwvdGl0bGU+IDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMiIgeT0iMiIvPiA8cGF0aCBkPSJNMTEgN0wxNyA3TTExIDEyTDE3IDEyTTExIDE3TDE3IDE3Ii8+IDxsaW5lIHgxPSI3IiB5MT0iNyIgeDI9IjciIHkyPSI3Ii8+IDxsaW5lIHgxPSI3IiB5MT0iMTIiIHgyPSI3IiB5Mj0iMTIiLz4gPGxpbmUgeDE9IjciIHkxPSIxNyIgeDI9IjciIHkyPSIxNyIvPiA8L3N2Zz4=)',
};
const NOTE_STYLE = `
    .note-obj-vue-module {
      position: absolute;
      left: 0;
      top: 0;
    }
    .note-obj-popver-frame-dialog {
      position: absolute;
      max-width: 300px;
      min-width: 200px;
      top: 0px;
      left: 0px;
      display: block;
      background-clip: padding-box;
      border: 1px solid rgba(0, 0, 0, .1);
      border-radius: 6px;
      box-shadow: -5px 5px 10px rgba(0, 0, 0, .2);
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 1px;
      z-index: 9999;
    }
    .note-obj-interface-dark .note-obj-popver-frame-dialog {
      background-color: #38526d;
      color: #fff;
    }
    .note-obj-interface-bright .note-obj-popver-frame-dialog {
      background-color: #fff;
      color: #000;
    }
    .note-obj-popover-frame-header {
      text-align: center;
      padding: 5px 10px;
      font-weight: bold;
      border-radius: 5px 5px 0px 0px;
      margin: 0px;
    }
    .note-obj-interface-dark .note-obj-popover-frame-header {
      background-color: rgba(0, 0, 0, .2);
      border-bottom: 1px solid rgba(0, 0, 0, .5);
    }
    .note-obj-interface-bright .note-obj-popover-frame-header {
      background-color: #efefef;
      border-bottom: 1px solid #dbdbdb;
    }
    .note-obj-popover-frame-content {
      padding: 0px 1px;
      max-height: 405px;
      overflow: auto;
      text-align: left;
    }
    .note-obj-popover-frame-item,
    .note-obj-popover-frame-item-deepen {
      height: 25px;
      cursor: pointer;
      padding: 2px 5px;
      font-size: 14px;
      line-height: 150%;
      margin: 0px;
      display: block;
      text-decoration: none;
    }
    .note-obj-interface-dark .note-obj-popover-frame-item {
      background-color: rgba(0, 0, 0, .2);
      color: #549be2;
    }
    .note-obj-interface-bright .note-obj-popover-frame-item {
      background-color: #fafafa;
      color: #336699;
    }
    .note-obj-interface-dark .note-obj-popover-frame-item-deepen {
      background-color: rgba(0, 0, 0, .3);
      color: #549be2;
    }
    .note-obj-interface-bright .note-obj-popover-frame-item-deepen {
      background-color: #f3f3f3;
      color: #336699;
    }
    .note-obj-popover-frame-arrow
    {
      border-color: transparent;
      border-left-width: 0px;
      border-right-color: rgba(0, 0, 0, .25);
      left: -20px;
      border-width: 10px;
      position: absolute;
      display: block;
      width: 0px;
      height: 0px;
      border-style: solid;
      box-sizing: border-box;
      top: 30px;
    }
    .note-obj-popover-frame-arrow::after {
      content: "";
      left: 1px;
      border-width: 9px;
      border-color: transparent;
      border-left-width: 0px;
      margin-top: -9px;
      display: block;
      width: 0px;
      height: 0px;
      border-style: solid;
      position: absolute;
      box-sizing: border-box;
    }
    .note-obj-interface-dark .note-obj-popover-frame-arrow::after {
      border-right-color: #38526d;
    }
    .note-obj-interface-bright .note-obj-popover-frame-arrow::after {
      border-right-color: #fff;
    }
    .note-obj-left-expand-box {
      bottom: 0px;
      left: 0px;
      height: 100%;
      width: 100px;
      position: fixed;
      display: flex;
      flex-flow: column;
      justify-content: center;
      flex-wrap: wrap;
      z-index: 99998;
    }
    .note-obj-search-expand-box {
      bottom: 0px;
      right: 0px;
      height: 80px;
      width: 100px;
      position: fixed;
      display: block;
      z-index: 99998;
    }
    .note-obj-settings-expand-span,
    .note-obj-note-management-expand-span,
    .note-obj-group-management-expand-span,
    .note-obj-search-expand-span {
      border-radius: 99px;
      color: #FFF;
      cursor: pointer;
      display: block;
      font-size: 13px;
      height: 38px;
      width: 38px;
      line-height: 100%;
      margin: 5px 0px;
      opacity: 0.8;
      text-align: center;
      z-index: 99999;
      user-select: none;
      background-repeat: no-repeat;
      background-size: 24px auto;
      background-position: center;
    }
    .note-obj-settings-expand-span:hover,
    .note-obj-note-management-expand-span:hover,
    .note-obj-group-management-expand-span:hover,
    .note-obj-search-expand-span:hover {
      box-shadow: 0 0 5px 1px green;
    }
    .note-obj-settings-expand-span {
      position: relative;
      left: -30px;
      border: 1px solid #336699;
      background-image: ${NOTE_ICON.SETTINGS_BLUE};
      transition: all .5s;
    }
    .note-obj-note-management-expand-span {
      position: relative;
      left: -30px;
      border: 1px solid #003366;
      background-image: ${NOTE_ICON.TABLE_BLUE};
      transition: all .75s;
    }
    .note-obj-group-management-expand-span {
      position: relative;
      left: -30px;
      border: 1px solid #333333;
      background-image: ${NOTE_ICON.BOARD_GRAY};
      transition: all 1s;
    }
    .note-obj-search-expand-span {
      position: absolute;
      bottom: 15px;
      right: -30px;
      border: 1px solid #00A1D6;
      background-image: ${NOTE_ICON.SEARCH_BLUE};
      transition: all .5s;
    }
    .note-obj-search-expand-box:hover .note-obj-search-expand-span {
      right: 25px;
      opacity: 1;
    }
    .note-obj-left-expand-box:hover .note-obj-settings-expand-span,
    .note-obj-left-expand-box:hover .note-obj-note-management-expand-span,
    .note-obj-left-expand-box:hover .note-obj-group-management-expand-span {
      left: 25px;
      opacity: 1;
    }
    .note-obj-search-frame-presentation {
      display: flex;
      position: fixed;
      background-color: rgba(0, 0, 0, .5);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100000;
      align-items: center;
      justify-content: center;
    }
    .note-obj-search-frame-dialog {
      position: relative;
      bottom: 25%;
    }
    .note-obj-search-frame-input {
      width: 350px;
      height: 40px;
      border-radius: 40px;
      padding: 0px 20px;
      position: relative;
      outline: none;
      box-sizing: content-box;
    }
    .note-obj-interface-dark .note-obj-search-frame-input {
      background-color: rgb(37, 51, 65);
      color: #fff;
      border: 2px solid #000;
    }
    .note-obj-interface-bright .note-obj-search-frame-input {
      background-color: #f7f7f7;
      color: #000;
      border: 2px solid #787878;
    }
    .note-obj-search-frame-close-btn {
      position: absolute;
      right: 2px;
      top: 10px;
      z-index: 100000;
      background-image: ${NOTE_ICON.CLOSE_GRAY};
      background-repeat: no-repeat;
      background-size: 24px auto;
      background-position: center;
      height: 24px;
      width: 24px;
      display: block;
      cursor: pointer;
    }
    .note-obj-search-frame-index-trapezoid {
      display: block;
      position: absolute;
      z-index: 100000;
      left: 20px;
      top: -25px;
      height: 0px;
      width: 350px;
      background: transparent;
      border-top: 0px solid transparent;
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      padding: 0px;
      margin: 0px;
      text-align: center;
      box-sizing: border-box;
    }
    .note-obj-interface-dark .note-obj-search-frame-index-trapezoid {
      border-bottom: 25px solid rgb(37, 51, 65);
    }
    .note-obj-interface-bright .note-obj-search-frame-index-trapezoid {
      border-bottom: 25px solid #f7f7f7;
    }
    .note-obj-search-frame-index-value {
      height: 25px;
      line-height: 25px;
    }
    .note-obj-interface-dark .note-obj-search-frame-index-value {
      color: #fff;
    }
    .note-obj-interface-bright .note-obj-search-frame-index-value {
      color: #000;
    }
    .note-obj-search-frame-tags-list {
      top: 44px;
      left: 20px;
      width: 350px;
      max-height: 250px;
      overflow-y: scroll;
      text-align: left;
      display: block;
      margin: 0px;
      padding: 0px;
      position: absolute;
      z-index: 100000;
      border: 1px solid rgba(29, 161, 242, .1);
      list-style: none;
    }
    .note-obj-interface-dark .note-obj-search-frame-tags-list {
      background-color: rgb(37, 51, 65);
    }
    .note-obj-interface-bright .note-obj-search-frame-tags-list {
      background-color: #f7f7f7;
    }
    .note-obj-search-frame-tags-list li, 
    .note-obj-search-frame-tags-list a,
    .note-obj-search-frame-tags-list a:visited {
      cursor: pointer;
      padding-left: 5px;
      height: 25px;
      line-height: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
      text-decoration: none;
    }
    .note-obj-search-frame-tags-item-text {
      display: inline-block;
      cursor: pointer;
      height: 25px;
      line-height: 25px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      user-select: none;
    }
    .note-obj-interface-dark .note-obj-search-frame-tags-item-text {
      color: #fff;
    }
    .note-obj-interface-bright .note-obj-search-frame-tags-item-text {
      color: #000;
    }
    .note-obj-search-frame-tags-item-text-has-btn {
      width: calc(100% - 68px) !important;
    }
    .note-obj-search-frame-tags-item-btn {
      float: right;
      margin: 0px 5px;
      height: 24px;
      width: 24px;
      border-radius: 24px;
      background-repeat: no-repeat;
      background-size: 24px auto;
      background-position: center;
      cursor: pointer;
      display: none;
    }
    .note-obj-search-frame-tags-item-btn:hover {
      box-shadow: 0 0 15px #000;
    }
    .note-obj-search-frame-tags-item-edit {
      background-image: ${NOTE_ICON.EDIT_BLACK};
    }
    .note-obj-search-frame-tags-item-delete {
      background-image: ${NOTE_ICON.DELETE_BLACK};
    }
    .note-obj-search-frame-tags-list a:hover .note-obj-search-frame-tags-item-btn,
    .note-obj-search-frame-tags-list li:hover .note-obj-search-frame-tags-item-btn {
      display: inline-block;
    }
    .note-obj-search-frame-tags-list-item-highlight {
      background-color: #6699cc;
    }
    .note-obj-add-frame-presentation {
      display: flex;
      position: fixed;
      background-color: rgba(0, 0, 0, .5);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100001;
      align-items: center;
      justify-content: center;
    }
    .note-obj-add-frame-dialog {
      position: relative;
      width: 400px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      border: 0px solid #000;
      box-shadow: 0 1px 10px rgba(0, 0, 0, .8);
    }
    .note-obj-interface-dark .note-obj-add-frame-dialog {
      background-color: rgb(21, 32, 43);
    }
    .note-obj-interface-bright .note-obj-add-frame-dialog {
      background-color: #fff;
    }
    .note-obj-add-frame-user-info {
      min-height: 48px;
      text-align: center;
      color: #1da1f2;
      font-weight: bold;
      background-color: rgba(0, 0, 0, 0);
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      white-space: normal;
      cursor: text;
      user-select: text;
      line-height: 24px;
      overflow: hidden;
      word-wrap: break-word;
      text-overflow: ellipsis;
    }
    .note-obj-interface-dark .note-obj-add-frame-user-info {
      border: 1px solid rgba(0, 0, 0, .5);
    }
    .note-obj-interface-bright .note-obj-add-frame-user-info {
      border: 1px solid #efefef;
    }
    .note-obj-add-frame-user-id, 
    .note-obj-add-frame-user-name {
      margin: 5px;
      display: block;
    }
    .note-obj-add-frame-input {
      min-height: 32px;
      margin: 5px;
      border: 1px solid rgba(29, 161, 242, .1);
      padding-left: 5px;
    }
    .note-obj-interface-dark .note-obj-add-frame-input {
      background-color: #253341;
      color: #fff;
    }
    .note-obj-interface-bright .note-obj-add-frame-input {
      background-color: #e8e8e8;
      color: #000;
    }
    .note-obj-add-frame-dialog button {
      min-height: 48px;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0);
    }
    .note-obj-interface-dark .note-obj-add-frame-dialog button {
      color: #fff;
      border: 1px solid rgba(0, 0, 0, .5);
    }
    .note-obj-interface-bright .note-obj-add-frame-dialog button {
      color: #000;
      border: 1px solid #efefef;
    }
    .note-obj-add-frame-dialog button:hover {
      color: #1da1f2;
    }
    .note-obj-add-frame-button-bottom {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
    .note-obj-management-frame-presentation,
    .note-obj-group-frame-presentation {
      display: flex;
      position: fixed;
      background-color: rgba(0, 0, 0, .5);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      align-items: center;
      justify-content: center;
    }
    .note-obj-management-frame-presentation {
      z-index: 100002;
    }
    .note-obj-group-frame-presentation {
      z-index: 100003;
    }
    .note-obj-management-frame-dialog,
    .note-obj-group-frame-dialog {
      position: relative;
      min-height: 580px;
      max-height: 600px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 1px 10px rgba(0, 0, 0, .8);
    }
    .note-obj-management-frame-dialog {
      width: 800px;
    }
    .note-obj-group-frame-dialog {
      width: 750px;
    }
    .note-obj-interface-dark .note-obj-management-frame-dialog,
    .note-obj-interface-dark .note-obj-group-frame-dialog  {
      background-color: rgb(21, 32, 43);
      border: 1px solid #000;
      color: #fff;
    }
    .note-obj-interface-bright .note-obj-management-frame-dialog,
    .note-obj-interface-bright .note-obj-group-frame-dialog  {
      background-color: #f5f5f5;
      border: 1px solid #e8e8e8;
      color: #000;
    }
    .note-obj-management-frame-header,
    .note-obj-group-frame-header {
      margin: 20px 15px;
    }
    .note-obj-management-frame-header input[type="text"],
    .note-obj-group-frame-header input[type="text"] {
      color: #000;
      width: 25%;
      padding-left: 5px;
      margin: 0px 5px;
    }
    .note-obj-management-frame-header select,
    .note-obj-group-frame-header select {
      cursor: pointer;
      color: #000;
    }
    .note-obj-management-frame-header select option,
    .note-obj-group-frame-header select option {
      color: #000;
    }
    .note-obj-management-frame-header select + label {
      margin-left: 5px;
    }
    .note-obj-management-frame-show-number,
    .note-obj-group-frame-show-number {
      margin: 0px 5px;
      float: right;
    }
    .note-obj-management-frame-content,
    .note-obj-group-frame-content {
      margin: 0px 10px;
      min-height: 420px;
    }
    .note-obj-management-frame-content table,
    .note-obj-group-frame-content table {
      border: 1px solid #ccc;
      text-align: center;
      table-layout: fixed;
      border-collapse: collapse;
    }
    .note-obj-management-frame-content table {
      width: 760px;
    }
    .note-obj-group-frame-content table {
      width: 710px;
    }
    .note-obj-management-frame-content table tr td,
    .note-obj-management-frame-content table tr th,
    .note-obj-group-frame-content table tr td,
    .note-obj-group-frame-content table tr th {
      border: 1px solid #ccc;
      height: 25px;
      line-height: 25px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0px;
      margin: 0px;
      text-align: center;
    }
    .note-obj-management-frame-content table tr th,
    .note-obj-group-frame-content table tr th {
      font-weight: bold;
    }
    .note-obj-management-frame-content table tr th:nth-of-type(1),
    .note-obj-management-frame-content table tr td:nth-of-type(1) {
      width: 5%;
    }
    .note-obj-management-frame-content table tr th:nth-of-type(2),
    .note-obj-management-frame-content table tr td:nth-of-type(2) {
      width: 15%;
    }
    .note-obj-management-frame-content table tr th:nth-of-type(3),
    .note-obj-management-frame-content table tr td:nth-of-type(3) {
      width: 20%;
    }
    .note-obj-management-frame-content table tr th:nth-of-type(4),
    .note-obj-management-frame-content table tr td:nth-of-type(4) {
      width: 26;
    }
    .note-obj-management-frame-content table tr th:nth-of-type(5),
    .note-obj-management-frame-content table tr td:nth-of-type(5) {
      width: 20%;
    }
    .note-obj-management-frame-content table tr th:nth-of-type(6),
    .note-obj-management-frame-content table tr td:nth-of-type(6) {
      width: 7%;
    }
    .note-obj-management-frame-content table tr th:nth-of-type(7),
    .note-obj-management-frame-content table tr td:nth-of-type(7) {
      width: 7%;
    }
    .note-obj-group-frame-content table tr th:nth-of-type(1),
    .note-obj-group-frame-content table tr td:nth-of-type(1) {
      width: 5%;
    }
    .note-obj-group-frame-content table tr th:nth-of-type(2),
    .note-obj-group-frame-content table tr td:nth-of-type(2) {
      width: 31%;
    }
    .note-obj-group-frame-content table tr th:nth-of-type(3),
    .note-obj-group-frame-content table tr td:nth-of-type(3) {
      width: 20%;
    }
    .note-obj-group-frame-content table tr th:nth-of-type(4),
    .note-obj-group-frame-content table tr td:nth-of-type(4) {
      width: 20%;
    }
    .note-obj-group-frame-content table tr th:nth-of-type(5),
    .note-obj-group-frame-content table tr td:nth-of-type(5) {
      width: 10%;
    }
    .note-obj-group-frame-content table tr th:nth-of-type(6),
    .note-obj-group-frame-content table tr td:nth-of-type(6) {
      width: 7%;
    }
    .note-obj-group-frame-content table tr th:nth-of-type(7),
    .note-obj-group-frame-content table tr td:nth-of-type(7) {
      width: 7%;
    }
    .note-obj-management-frame-content th input[type="checkbox"],
    .note-obj-management-frame-content td input[type="checkbox"],
    .note-obj-group-frame-content th input[type="checkbox"],
    .note-obj-group-frame-content td input[type="checkbox"],
    .note-obj-group-frame-content td input[type="color"] {
      cursor: pointer;
    }
    .note-obj-group-frame-content td input[type="color"] {
      height: 20px;
    }
    .note-obj-group-frame-content td input[type="number"] {
      width: 80%;
      height: 80%;
    }
    .note-obj-management-frame-item-a,
    .note-obj-management-frame-item-a:visited {
      color: #4e8ac5;
      text-decoration: none;
      cursor: pointer;
    }
    .note-obj-management-frame-tbody,
    .note-obj-group-frame-tbody {
      max-height: 391px;
      overflow: auto;
    }
    .note-obj-management-frame-group-item {
      display: block;
      text-align: center;
      cursor: pointer;
      border-radius: 0px;
      text-overflow: ellipsis;
      overflow: hidden;
      padding: 0px 5px;
    }
    .note-obj-management-frame-item-input-tag,
    .note-obj-group-frame-item-input-value {
      width: calc(100%);
      height: calc(100%);
      border: 0px;
      text-align: center;
      margin: 0px;
      padding: 0px;
    }
    .note-obj-interface-dark .note-obj-management-frame-item-input-tag,
    .note-obj-interface-dark .note-obj-group-frame-item-input-value {
      background-color: rgb(21, 32, 43);
      color: #fff;
    }
    .note-obj-interface-bright .note-obj-management-frame-item-input-tag,
    .note-obj-interface-bright .note-obj-group-frame-item-input-value {
      background-color: #f5f5f5;
      color: #000;
    }
    .note-obj-management-frame-item-input-edit {
      caret-color: #339933;
    }
    .note-obj-interface-dark .note-obj-management-frame-item-input-edit {
      color: #FF3;
    }
    .note-obj-interface-bright .note-obj-management-frame-item-input-edit {
      color: #e86c07;
    }
    .note-obj-management-frame-item-btn,
    .note-obj-group-frame-item-btn {
      display: inline;
      height: 24px;
      width: 24px;
      background-repeat: no-repeat;
      background-size: 20px auto;
      background-position: center;
      cursor: pointer;
      padding: 0px 20px;
    }
    .note-obj-interface-dark .note-obj-management-frame-item-edit,
    .note-obj-interface-dark .note-obj-group-frame-item-edit {
      background-image: ${NOTE_ICON.EDIT_YELLOW};
    }
    .note-obj-interface-bright .note-obj-management-frame-item-edit,
    .note-obj-interface-bright .note-obj-group-frame-item-edit {
      background-image: ${NOTE_ICON.EDIT_BLUE};
    }
    .note-obj-interface-dark .note-obj-management-frame-item-delete,
    .note-obj-interface-dark .note-obj-group-frame-item-delete {
      background-image: ${NOTE_ICON.DELETE_YELLOW};
    }
    .note-obj-interface-bright .note-obj-management-frame-item-delete,
    .note-obj-interface-bright .note-obj-group-frame-item-delete {
      background-image: ${NOTE_ICON.DELETE_BLUE};
    }
    .note-obj-interface-dark .note-obj-management-frame-item-ok,
    .note-obj-interface-dark .note-obj-group-frame-item-ok {
      background-image: ${NOTE_ICON.OK_YELLOW} !important;
    }
    .note-obj-interface-bright .note-obj-management-frame-item-ok,
    .note-obj-interface-bright .note-obj-group-frame-item-ok {
      background-image: ${NOTE_ICON.OK_BLUE} !important;
    }
    .note-obj-management-frame-tool,
    .note-obj-group-frame-tool {
      display: inline-block;
      margin: 15px 15px 0px 15px;
    }
    .note-obj-management-frame-tool button,
    .note-obj-group-frame-tool button {
      display: inline-block;
      min-width: 50px;
      max-width: 140px;
      cursor: pointer;
      margin-right: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background-color: #FFF;
      padding: 0px 5px;
      color: #000;
    }
    .note-obj-management-frame-tool button:hover,
    .note-obj-group-frame-tool button:hover {
      background-color: #DDD;
    }
    .note-obj-management-frame-tool button[disabled],
    .note-obj-group-frame-tool button[disabled] {
      pointer-events: none;
      cursor: not-allowed;
      filter: alpha(opacity=65);
      -webkit-box-shadow: none;
      box-shadow: none;
      opacity: .65;   
    }
    .note-obj-management-frame-footer,
    .note-obj-group-frame-footer {
      display: inline-block;
      margin: 15px 15px;
    }
    .note-obj-management-frame-restore-content,
    .note-obj-group-frame-restore-content {
      display: inline;
      text-decoration: underline !important;
      opacity: 0.25;
      cursor: not-allowed;
      user-select: none;
    }
    .note-obj-interface-dark .note-obj-management-frame-restore-content,
    .note-obj-interface-dark .note-obj-group-frame-restore-content {
      color: #8686e0 !important;
    }
    .note-obj-interface-bright .note-obj-management-frame-restore-content,
    .note-obj-interface-bright .note-obj-group-frame-restore-content {
      color: #00376b !important;
    }
    .note-obj-management-frame-restore-content-enabled,
    .note-obj-group-frame-restore-content-enabled {
      opacity: 1 !important;
      cursor: pointer;
    }
    .note-obj-management-frame-show-modify-text,
    .note-obj-group-frame-show-modify-text,
    .note-obj-management-frame-show-wait-text,
    .note-obj-group-frame-show-wait-text {
      margin-left: 20px;
    }
    .note-obj-management-frame-cancel-content,
    .note-obj-group-frame-cancel-content {
      border-radius: 5px;
      display: inline-block;
      text-align: center;
      cursor: pointer;
      padding: 5px 10px;
      float: right;
      user-select: none;
    }
    .note-obj-interface-dark .note-obj-management-frame-cancel-content,
    .note-obj-interface-dark .note-obj-group-frame-cancel-content {
      background-color: #333;
    }
    .note-obj-interface-bright .note-obj-management-frame-cancel-content,
    .note-obj-interface-bright .note-obj-group-frame-cancel-content {
      background-color: #dbdbdb;
    }
    .note-obj-interface-dark .note-obj-management-frame-cancel-content:hover,
    .note-obj-interface-dark .note-obj-group-frame-cancel-content:hover {
      background-color: #444;
    }
    .note-obj-interface-bright .note-obj-management-frame-cancel-content:hover,
    .note-obj-interface-bright .note-obj-group-frame-cancel-content:hover {
      background-color: #aaa;
    }
    .note-obj-management-frame-save-content,
    .note-obj-group-frame-save-content {
      border-radius: 5px;
      display: inline-block;
      margin-left: 20px;
      text-align: center;
      cursor: pointer;
      background-color: #336699;
      color: #fff;
      padding: 5px 10px;
      float: right;
      user-select: none;
    }
    .note-obj-management-frame-save-content:hover,
    .note-obj-group-frame-save-content:hover {
      background-color: #4477AA;
    }
    .note-obj-select-group-frame-presentation {
      display: flex;
      position: fixed;
      background-color: rgba(0, 0, 0, .7);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100004;
      align-items: center;
      justify-content: center;
    }
    .note-obj-select-group-frame-dialog {
      position: relative;
      width: 350px;
      border: 3px solid #614343;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
    }
    .note-obj-interface-dark .note-obj-select-group-frame-dialog {
      background-color: #191e23;
    }
    .note-obj-interface-bright .note-obj-select-group-frame-dialog {
      background-color: #fff;
    }
    .note-obj-select-group-frame-header {
      margin-top: 10px;
      align-items: center;
      text-align: center;
    }
    .note-obj-select-group-frame-header-text {
      font-weight: bold;
    }
    .note-obj-interface-dark .note-obj-select-group-frame-header-text {
      color: #fff;
    }
    .note-obj-interface-bright .note-obj-select-group-frame-header-text {
      color: #000;
    }
    .note-obj-select-group-frame-content {
      display: block;
      text-align: center;
      margin: 25px 20px;
      white-space: pre-wrap;
      max-height: 400px;
      overflow: auto;
    }
    .note-obj-interface-dark .note-obj-select-group-frame-content {
      color: #fff;
    }
    .note-obj-interface-bright .note-obj-select-group-frame-content {
      color: #000;
    }
    .note-obj-select-group-frame-footer {
      color: #fff;
      display: inline-block;
      text-align: center;
      margin-bottom: 20px;
    }
    .note-obj-select-group-frame-footer span {
      cursor: pointer;
      margin: 0px 25px;
      border: 1px solid #666;
      border-radius: 5px;
      padding: 5px 10px;
      background-color: #333;
      user-select: none;
    }
    .note-obj-select-group-frame-footer span:hover {
      box-shadow: 0 0 10px #339933;
    }
    .note-obj-select-group-frame-group-item {
      border-radius: 99px;
      cursor: pointer;
      margin: 2px 0px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowarp;
      display: block;
      padding: 2px 10px;
    }
    .note-obj-new-group-frame-presentation {
      display: flex;
      position: fixed;
      background-color: rgba(0, 0, 0, .8);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100005;
      align-items: center;
      justify-content: center;
    }
    .note-obj-new-group-frame-dialog {
      position: relative;
      width: 400px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      border: 3px solid #614343;
      box-shadow: 0 1px 10px rgba(0, 0, 0, .8);
    }
    .note-obj-interface-dark .note-obj-new-group-frame-dialog {
      background-color: rgb(21, 32, 43);
    }
    .note-obj-interface-bright .note-obj-new-group-frame-dialog {
      background-color: #fff;
    }
    .note-obj-new-group-frame-header {
      min-height: 48px;
      text-align: center;
      color: #1da1f2;
      font-weight: bold;
      background-color: rgba(0, 0, 0, 0);
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      white-space: normal;
      cursor: text;
      user-select: text;
      line-height: 24px;
      overflow: hidden;
      word-wrap: break-word;
      text-overflow: ellipsis;
    }
    .note-obj-interface-dark .note-obj-new-group-frame-header {
      border: 1px solid rgba(0, 0, 0, .5);
    }
    .note-obj-interface-bright .note-obj-new-group-frame-header {
      border: 1px solid #efefef;
    }
    .note-obj-new-group-frame-title-text {
      margin: 5px;
      display: block;
    }
    .note-obj-new-group-frame-input {
      min-height: 32px;
      margin: 5px;
      border: 1px solid rgba(29, 161, 242, .1);
      padding-left: 5px;
    }
    .note-obj-interface-dark .note-obj-new-group-frame-input {
      background-color: #253341;
      color: #fff;
    }
    .note-obj-interface-bright .note-obj-new-group-frame-input {
      background-color: #e8e8e8;
      color: #000;
    }
    .note-obj-new-group-frame-color-label, 
    .note-obj-new-group-frame-dialog button {
      min-height: 48px;
      background-color: rgba(0, 0, 0, 0);
    }
    .note-obj-interface-dark .note-obj-new-group-frame-color-label,
    .note-obj-interface-dark .note-obj-new-group-frame-dialog button {
      color: #fff;
      border: 1px solid rgba(0, 0, 0, .5);
    }
    .note-obj-interface-bright .note-obj-new-group-frame-color-label,
    .note-obj-interface-bright .note-obj-new-group-frame-dialog button {
      color: #000;
      border: 1px solid #efefef;
    }
    .note-obj-new-group-frame-color-label {
      text-align: center;
      align-items: center;
      line-height: 48px;
      display: block;
    }
    .note-obj-new-group-frame-color-label input[type="color"] {
      cursor: pointer;
      margin-left: 10px;
    }
    .note-obj-new-group-frame-color-label input[type="number"] {
      margin-left: 10px;
    }
    .note-obj-new-group-frame-dialog button {
      cursor: pointer;
    }
    .note-obj-new-group-frame-dialog button:hover {
      color: #1da1f2;
    }
    .note-obj-new-group-frame-button-bottom {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
    .note-obj-settings-frame-presentation {
      display: flex;
      position: fixed;
      background-color: rgba(0, 0, 0, .8);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100006;
      align-items: center;
      justify-content: center;
    }
    .note-obj-settings-frame-card-enter-active, 
    .note-obj-settings-frame-card-leave-active {
      transition: all .5s ease;
    }
    .note-obj-settings-frame-card-enter, 
    .note-obj-settings-frame-card-leave-to {
      transform: translateX(-100%);
      opacity: 0;
    }
    .note-obj-settings-frame-card {
      display: flex;
      flex-direction: column;
      width: 450px;
      max-width: 100%;
      max-height: 100%;
      margin: 0px;
      position: absolute;
      left: 0px;
      top: 0px;
      bottom: 0px;
      border: 0px;
      border-radius: 0px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
    }
    .note-obj-interface-dark .note-obj-settings-frame-card {
      background-color: rgb(21, 32, 43);
      color: #fff;
    }
    .note-obj-interface-bright .note-obj-settings-frame-card {
      background-color: #fff;
      color: #000;
    }
    .note-obj-settings-frame-header {
      padding: 16px;
      display: block;
    }
    .note-obj-interface-dark .note-obj-settings-frame-header {
      border-bottom: 2px solid #000;
    }
    .note-obj-interface-bright .note-obj-settings-frame-header {
      border-bottom: 2px solid #CCC;
    }
    .note-obj-settings-frame-headline {
      font-size: 16px;
      font-weight: bold;
      float: left;
      line-height: 100%;
    }
    .note-obj-settings-frame-close-btn {
      width: 24px;
      height: 24px;
      cursor: pointer;
      background-image: ${NOTE_ICON.CLOSE_GRAY};
      background-size: 24px auto;
      background-repeat: no-repeat;
      background-position: center;
      float: right;
    }
    .note-obj-settings-frame-body {
      overflow: auto;
      display: block;
      padding: 20px;
      flex-grow: 1;
      flex-shrink: 1;
    }
    .note-obj-settings-frame-body label, 
    .note-obj-settings-frame-body input[type="checkbox"], 
    .note-obj-settings-frame-body input[type="radio"] {
      cursor: pointer;
    }
    .note-obj-settings-frame-header-icon {
      width: 16px;
      height: 16px;
      background-size: 16px auto;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      right: 10px;
      top: 10px;
      transition: transform .5s;
    }
    .note-obj-interface-dark .note-obj-settings-frame-header-icon {
      background-image: ${NOTE_ICON.CHEVRON_RIGHT_WHITE};
    }
    .note-obj-interface-bright .note-obj-settings-frame-header-icon {
      background-image: ${NOTE_ICON.CHEVRON_RIGHT_BLACK};
    }
    .note-obj-settings-frame-content {
      border: 1px solid #333;
      margin: 10px;
    }
    .note-obj-settings-frame-header-icon-romote {
      transform: rotate(90deg);
    }
    .note-obj-settings-frame-flod {
      border: 1px solid #666;
    }
    .note-obj-settings-frame-flod > header {
      cursor: pointer;
      min-height: 40px;
      display: flex;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, .2);
    }
    .note-obj-interface-dark .note-obj-settings-frame-flod > header {
      background-color: #363636;
      position: relative;
    }
    .note-obj-interface-bright .note-obj-settings-frame-flod > header {
      background-color: #DDD;
      position: relative;
    }
    .note-obj-settings-frame-flod > header > span {
      font-weight: 500;
      padding: 10px;
      margin: 0;
      border: 0;
      width: 100%;
    }
    .note-obj-settings-frame-content-section {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 8px;
    }
    .note-obj-settings-frame-content-section input[type="text"] {
      margin: 0px 10px;
      width: 100%;
      color: #000;
    }
    .note-obj-settings-frame-content-section a,
    .note-obj-settings-frame-content-section a:visited {
      color: #4e8ac5;
      margin-left: 10px;
      text-decoration: none;
    }
    .note-obj-settings-frame-content-section p {
      margin: 0px 0px 0px 10px;
    }
    .note-obj-settings-frame-content-section input[type="checkbox"] {
      clip: rect(0, 0, 0, 0);
      position: absolute;
    }
    .note-obj-settings-frame-content-section input[type="checkbox"] + label {
      padding-left: 50px;
      position: relative;
    }
    .note-obj-settings-frame-content-section input[type="checkbox"] + label::before {
      content: "";
      position: absolute;
      left: 0px;
      margin-top: 1px;
      border: 1px solid #ddd;
      border-radius: 100px;
      cursor: pointer;
      display: inline-block;
      width: 2.5em;
      height: 1em;
      transition: border .4s, box-shadow .4s;
      background-color: #fff;
      border-color: #e9e9e9;
      box-shadow: 0px 0px 0px 0px inset #e9e9e9;
      box-sizing: content-box;
    }
    .note-obj-settings-frame-content-section input[type="checkbox"] + label::after {
      content: "";
      cursor: pointer;
      position: absolute;
      top: 2px;
      left: 0px;
      width: 1em;
      height: 1em;
      transition: background-color .4s, left .2s;
      border-radius: 100px;
      background-color: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
    }
    .note-obj-settings-frame-content-section input[type="checkbox"]:checked + label::before {
      content: "";
      position: absolute;
      left: 0px;
      margin-top: 1px;
      border: 1px solid #ddd;
      border-radius: 100px;
      cursor: pointer;
      display: inline-block;
      width: 2.5em;
      height: 1em;
      transition: border .4s, box-shadow .4s, background-color 1.2s;
      background-color: #3c81df;
      border-color: #3c81df;
      box-shadow: 0px 0px 0px 12px inset #3c81df;
      box-sizing: content-box;
    }
    .note-obj-settings-frame-content-section input[type="checkbox"]:checked + label::after {
      content: "";
      cursor: pointer;
      position: absolute;
      top: 2px;
      left: 1.5em;
      width: 1em;
      height: 1em;
      transition: background-color .4s, left .2s;
      border-radius: 100px;
      background-color: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
    }
    .note-obj-settings-frame-content-section input[type="radio"] {
      clip: rect(0, 0, 0, 0);
      position: absolute;
    }
    .note-obj-settings-frame-content-section input[type="radio"] + label {
      user-select: none;
      white-space: nowrap;
      padding: 3px 5px;
      color: #fff;
      background-color: #333;
    }
    .note-obj-settings-frame-content-section input[type="radio"]:checked + label {
      user-select: none;
      white-space: nowrap;
      padding: 3px 5px;
      color: #fff;
      background-color: #3c81df;
    }
    .note-obj-settings-frame-content-section button {
      padding: 1px 6px;
      margin: 2px 10px;
      cursor: pointer;
      background-color: #fff;
      color: #000;
    }
    .note-obj-setttings-frame-before-input-text {
      white-space: nowrap;
    }
    .note-obj-settings-frame-radio-config-text,
    .note-obj-settings-frame-before-select-text {
      margin-right: 10px;
    }
    .note-obj-settings-frame-footer {
      padding: 16px;
      display: block;
      position: relative;
    }
    .note-obj-settings-frame-component-package,
    .note-obj-settings-frame-component-package-input-text,
    .note-obj-settings-frame-content-child-section {
      display: flex;
      flex-flow: row;
    }
    .note-obj-settings-frame-component-package {
      max-width: 350px;
    }
    .note-obj-settings-frame-component-package-input-text {
      max-width: 250px;
    }
    .note-obj-settings-frame-component-package select {
      cursor: pointer;
      color: #000;
    }
    .note-obj-settings-frame-component-package select option {
      color: #000;
    }
    .note-obj-settings-frame-language-help-text {
      text-decoration: underline;
      cursor: pointer;
      color: #4e8ac5;
    }
    .note-obj-settings-frame-language-help-text:hover::after {
      content: "???";
      text-decoration: none;
      margin-left: 10px;
      display: inline-block;
    }
    .note-obj-interface-dark .note-obj-settings-frame-footer {
      border-top: 2px solid #000;
    }
    .note-obj-interface-bright .note-obj-settings-frame-footer {
      border-top: 2px solid #CCC;
    }
    .note-obj-settings-frame-footer button {
      float: left;
      padding: 0px 5px;
      margin: 0px 5px;
      cursor: pointer;
      background-color: #FFF;
      color: #000;
    }
    .note-obj-settings-frame-footer button:hover {
      background-color: #DDD;
    }
    .note-obj-settings-frame-footer span {
      float: right;
      user-select: none;
      margin: 0px 5px;
      padding: 5px 10px;
      cursor: pointer;
      text-align: center;
      border-radius: 5px;
    }
    .note-obj-settings-frame-footer-save-btn {
      background-color: #336699;
      color: #fff;
    }
    .note-obj-settings-frame-footer-save-btn:hover {
      background-color: #4477AA;
    }
    .note-obj-interface-dark .note-obj-settings-frame-footer-cancel-btn {
      background-color: #333;
    }
    .note-obj-interface-bright .note-obj-settings-frame-footer-cancel-btn {
      background-color: #dbdbdb;
    }
    .note-obj-interface-dark .note-obj-settings-frame-footer-cancel-btn:hover {
      background-color: #444;
    }
    .note-obj-interface-bright .note-obj-settings-frame-footer-cancel-btn:hover {
      background-color: #aaa;
    }
    .note-obj-confirm-frame-presentation {
      display: flex;
      position: fixed;
      background-color: rgba(0, 0, 0, .7);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100007;
      align-items: center;
      justify-content: center;
    }
    .note-obj-confirm-frame-dialog {
      position: relative;
      width: 350px;
      border: 3px solid #614343;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
    }
    .note-obj-interface-dark .note-obj-confirm-frame-dialog {
      background-color: #191e23;
    }
    .note-obj-interface-bright .note-obj-confirm-frame-dialog {
      background-color: #fff;
    }
    .note-obj-confirm-frame-content {
      display: block;
      text-align: center;
      margin: 25px 20px;
      white-space: pre-wrap;
      max-height: 200px;
      overflow: auto;
    }
    .note-obj-interface-dark .note-obj-confirm-frame-content {
      color: #fff;
    }
    .note-obj-interface-bright .note-obj-confirm-frame-content {
      color: #000;
    }
    .note-obj-confirm-frame-footer {
      color: #fff;
      display: inline-block;
      text-align: center;
      margin-bottom: 20px;
    }
    .note-obj-confirm-frame-footer span {
      cursor: pointer;
      margin: 0px 25px;
      border: 1px solid #666;
      border-radius: 5px;
      padding: 5px 10px;
    }
    .note-obj-confirm-frame-footer span:hover,
    .note-obj-confirm-frame-footer span:focus {
      box-shadow: 0 0 10px 5px #339933;
    }
    .note-obj-confirm-frame-no-btn {
      background-color: #333;
      user-select: none;
    }
    .note-obj-confirm-frame-yes-btn {
      background-color: #336699;
      user-select: none;
    }
    .note-obj-message-frame-presentation {
      max-width: 320px;
      position: fixed;
      top: 20px;
      right: 0px;
      z-index: 100008;
      pointer-events: none;
    }
    .note-obj-message-frame-notifaction {
      display: block;
      box-sizing: inherit;
      box-shadow: 0 1px 4px rgba(0,0,0,.2);
      background-color: #333366;
      color: #fff;
      margin: 10px;
      position: relative;
      min-width: 240px;
      backface-visibility: hidden;
      pointer-events: all;
      border-radius: 3px;
      padding: 16px 20px;
    }
    .note-obj-message-frame-notifaction-enter-active,
    .note-obj-message-frame-notifaction-leave-active {
      transition: all .5s;
    }
    .note-obj-message-frame-notifaction-enter {
      transform: translateX(100%);
      opacity: 0;
    }
    .note-obj-message-frame-notifaction-leave-to {
      opacity: 0;
    }
    .note-obj-message-frame-close-btn {
      position: absolute;
      right: 4px;
      top: 4px;
      width: 16px;
      height: 16px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, .5);
      cursor: pointer;
      background-image: ${NOTE_ICON.CLOSE_GRAY};
      background-size: 16px auto;
      background-repeat: no-repeat;
      background-position: center;
    }
    .note-obj-message-frame-content {
      margin-top: 5px;
    }
`;
Vue.directive('focus', {
  update(el, binding) {
    if (binding.oldValue !== binding.value) {
      if (binding.value) {
        Note_Obj.fn.debounce(() => {
          try {
            binding.value && el.focus() && el.select();
          } catch (e) {
            console.error('Error in focus command.', e);
          }
        }, 200);
      }
    }
  },
});
Vue.component('note-obj-popover-frame', {
  render(createElement) {
    const self = this;
    return createElement(
      'div',
      {
        attrs: {
          id: this.id + '_popoverFrameDialog',
        },
        class: 'note-obj-popver-frame-dialog',
        style: {
          display: this.isShow ? '' : 'none',
          left: `${this.x + 20}px`,
          top: `${this.y - 50}px`,
        },
        on: {
          mouseenter: _event => {
            self.$emit('mouse-event', true);
          },
          mouseleave: _event => {
            self.$emit('mouse-event', false);
          },
        },
      },
      [
        createElement(
          'div',
          {
            class: 'note-obj-popover-frame-header',
          },
          [
            createElement('div', {
              class: 'note-obj-popover-frame-title',
              domProps: {
                textContent: this.groupName,
              },
            }),
            createElement('div', {
              class: 'note-obj-popover-frame-title',
              domProps: {
                textContent: this.current.tag || this.current.name || '',
              },
            }),
          ]
        ),
        createElement(
          'div',
          {
            class: 'note-obj-popover-frame-content',
          },
          Object.keys(this.items).map((key, index) => {
            if (this.hasOpenIntTabMethods) {
              return createElement('div', {
                key: key,
                class: index % 2 === 1 ? 'note-obj-popover-frame-item-deepen' : 'note-obj-popover-frame-item',
                attrs: {
                  'data-key': key,
                  title:
                    key +
                    (this.items[key].name && this.items[key].name !== key ? `\n${this.items[key].name}` : '') +
                    (this.items[key].tag ? `\n${this.items[key].tag}` : ''),
                },
                domProps: {
                  textContent: this.items[key].tag || this.items[key].name || key,
                },
                on: {
                  click: event => {
                    event.stopPropagation();
                    const ev = event || window.event;
                    self.$emit('item-click', event.target.dataset.key, ev.ctrlKey || ev.metaKey, ev.shiftKey);
                  },
                },
              });
            } else {
              const newUrl = typeof this.itemClick === 'function' ? this.itemClick(key) : `${window.location.origin}/${key}`;
              return createElement('a', {
                key: key,
                class: index % 2 === 1 ? 'note-obj-popover-frame-item-deepen' : 'note-obj-popover-frame-item',
                attrs: {
                  'data-key': key,
                  title:
                    key +
                    (this.items[key].name && this.items[key].name !== key ? `\n${this.items[key].name}` : '') +
                    (this.items[key].tag ? `\n${this.items[key].tag}` : ''),
                  href: newUrl,
                  target: this.openInTab ? '_blank' : '_self',
                },
                domProps: {
                  textContent: this.items[key].tag || this.items[key].name || key,
                },
              });
            }
          })
        ),
        createElement('div', {
          class: 'note-obj-popover-frame-arrow',
        }),
      ]
    );
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    isShow: {
      type: Boolean,
      required: true,
    },
    current: {
      type: Object,
      required: true,
    },
    items: {
      type: Object,
      required: true,
    },
    groupName: {
      type: String,
      required: true,
    },
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
    openInTab: {
      type: Boolean,
      required: true,
    },
    itemClick: {
      type: Function,
    },
  },
  data() {
    return {
      hasOpenIntTabMethods: Note_Obj.GM.hasOpenIntTabMethods(),
    };
  },
});
Vue.component('note-obj-single-float-button', {
  render(createElement) {
    if (this.isInsert) {
      const self = this;
      return createElement(
        'div',
        {
          class: this.extraBoxClassName ? `${this.boxClassName} ${this.extraBoxClassName}` : this.boxClassName,
        },
        [
          createElement('span', {
            attrs: {
              title: this.title,
            },
            class: this.extraClassName ? `${this.className} ${this.extraClassName}` : this.className,
            on: {
              click: event => {
                event.stopPropagation();
                self.$emit('click-event');
              },
            },
          }),
        ]
      );
    }
  },
  props: {
    isInsert: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      required: true,
    },
    boxClassName: {
      type: String,
      required: true,
    },
    extraClassName: {
      type: String,
      default: '',
    },
    extraBoxClassName: {
      type: String,
      default: '',
    },
  },
});
Vue.component('note-obj-set-float-button', {
  render(createElement) {
    const self = this;
    let isInsert = false;
    for (const key in this.buttonSet) {
      if (this.buttonSet[key].isInsert) {
        isInsert = true;
      }
    }
    if (isInsert) {
      return createElement(
        'div',
        {
          class: this.extraBoxClassName ? `${this.boxClassName} ${this.extraBoxClassName}` : this.boxClassName,
        },
        Object.keys(this.buttonSet).map(key => {
          if (this.buttonSet[key].isInsert) {
            return createElement('span', {
              class: this.buttonSet[key].extraClassName
                ? `${this.buttonSet[key].className} ${this.buttonSet[key].extraClassName}`
                : this.buttonSet[key].className,
              attrs: {
                title: this.buttonSet[key].title || '',
              },
              on: {
                click: event => {
                  event.stopPropagation();
                  self.$emit('click-event', key);
                },
              },
            });
          } else {
            return null;
          }
        })
      );
    }
  },
  props: {
    buttonSet: {
      type: Object,
      required: true,
    },
    boxClassName: {
      type: String,
      required: true,
    },
    extraBoxClassName: {
      type: String,
      default: '',
    },
  },
});
Vue.component('note-obj-search-frame', {
  render(createElement) {
    const self = this;
    return createElement(
      'div',
      {
        attrs: {
          id: this.id + '_searchFramePresentation',
        },
        class: 'note-obj-search-frame-presentation',
        style: {
          display: this.isShow ? '' : 'none',
        },
        on: {
          click: event => {
            if (event.target !== event.currentTarget) return;
            self.$emit('presentation-click');
          },
        },
      },
      [
        createElement(
          'div',
          {
            class: 'note-obj-search-frame-dialog',
          },
          [
            createElement('input', {
              attrs: {
                id: this.id + '_searchFrameInputBox',
                type: 'text',
                placeholder: this.lang.searchTagPlaceholder,
              },
              class: 'note-obj-search-frame-input',
              on: {
                input: event => {
                  self.inputValue = event.target.value.trim();
                },
                keydown: event => {
                  if (event.keyCode === 38 || event.keyCode === 40 || event.keyCode === 33 || event.keyCode === 34) {
                    event.preventDefault();
                    self.keyDownEvent(event);
                  }
                },
                keyup: event => {
                  if (event.keyCode === 13 || event.keyCode === 27 || event.keyCode === 113 || event.keyCode === 46) {
                    event.stopPropagation();
                    event.preventDefault();
                    self.keyUpEvent(event);
                  }
                },
                focusin: () => {
                  self.searchEvent(self.inputValue);
                },
              },
            }),
            createElement('span', {
              attrs: {
                title: this.lang.searchCloseTitle,
              },
              class: 'note-obj-search-frame-close-btn',
              on: {
                click: event => {
                  event.stopPropagation();
                  self.$emit('close-click');
                },
              },
            }),
            this.showIndex
              ? createElement(
                  'div',
                  {
                    class: 'note-obj-search-frame-index-trapezoid',
                  },
                  [
                    createElement('span', {
                      class: 'note-obj-search-frame-index-value',
                      domProps: {
                        textContent: `${this.currentIndex}/${this.totalIndex}`,
                      },
                    }),
                  ]
                )
              : null,
            createElement(
              'ul',
              {
                attrs: {
                  id: this.id + '_searchFrameTagsList',
                },
                class: 'note-obj-search-frame-tags-list',
              },
              Object.keys(this.items).map(key => {
                let title =
                  key +
                  (this.items[key].name && this.items[key].name !== key ? `\n${this.items[key].name}` : '') +
                  (this.items[key].tag ? `\n${this.items[key].tag}` : '');
                let text = this.items[key].tag || this.items[key].name || key;
                if (this.showGroupName) {
                  const groupKey = this.items[key].group;
                  if (groupKey && groupKey !== 'default' && this.group[groupKey]) {
                    title += `\n[${this.group[groupKey].value}]`;
                    text += ` [${this.group[groupKey].value}]`;
                  }
                }
                let domType, attrs, onEvent;
                if (this.hasOpenIntTabMethods) {
                  domType = 'li';
                  attrs = {
                    'data-key': key,
                    'data-index': this.items[key].index,
                    title: title,
                  };
                  onEvent = {
                    mouseenter: event => {
                      self.listItemMouseEnterEvent(event);
                    },
                    click: event => {
                      event.stopPropagation();
                      const ev = event || window.event;
                      self.$emit('list-item-click', event.target.dataset.key, ev.ctrlKey || ev.metaKey, ev.shiftKey);
                    },
                  };
                } else {
                  domType = 'a';
                  const newUrl = typeof this.itemClick === 'function' ? this.itemClick(key) : `${window.location.origin}/${key}`;
                  attrs = {
                    'data-key': key,
                    'data-index': this.items[key].index,
                    title: title,
                    href: newUrl,
                    target: this.openInTab ? '_blank' : '_self',
                  };
                  onEvent = {
                    mouseenter: event => {
                      self.listItemMouseEnterEvent(event);
                    },
                  };
                }
                return createElement(
                  domType,
                  {
                    key: key,
                    style: {
                      display: this.items[key].isShow ? '' : 'none',
                    },
                    attrs: attrs,
                    class: {
                      'note-obj-search-frame-tags-list-item-highlight': this.items[key].highlight,
                    },
                    on: onEvent,
                  },
                  [
                    createElement('span', {
                      attrs: {
                        'data-key': key,
                      },
                      class: {
                        'note-obj-search-frame-tags-item-text': true,
                        'note-obj-search-frame-tags-item-text-has-btn': this.showButton,
                      },
                      domProps: {
                        textContent: text,
                      },
                    }),
                    this.showButton
                      ? createElement('span', {
                          attrs: {
                            'data-key': key,
                            title: this.lang.deleteTitle,
                          },
                          class: 'note-obj-search-frame-tags-item-btn note-obj-search-frame-tags-item-delete',
                          on: {
                            click: event => {
                              event.stopPropagation();
                              event.preventDefault();
                              self.$emit('list-item-delete', event.target.dataset.key);
                            },
                          },
                        })
                      : null,
                    this.showButton
                      ? createElement('span', {
                          attrs: {
                            'data-key': key,
                            title: this.lang.editTitle,
                          },
                          class: 'note-obj-search-frame-tags-item-btn note-obj-search-frame-tags-item-edit',
                          on: {
                            click: event => {
                              event.stopPropagation();
                              event.preventDefault();
                              self.$emit('list-item-edit', event.target.dataset.key);
                            },
                          },
                        })
                      : null,
                  ]
                );
              })
            ),
          ]
        ),
      ]
    );
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    lang: {
      type: Object,
      required: true,
    },
    isShow: {
      type: Boolean,
      required: true,
    },
    originalItems: {
      type: Object,
      required: true,
    },
    showIndex: {
      type: Boolean,
      required: true,
    },
    showButton: {
      type: Boolean,
      required: true,
    },
    showGroupName: {
      type: Boolean,
      required: true,
    },
    determineSearchString: {
      type: Function,
      required: true,
    },
    group: {
      type: Object,
      required: true,
    },
    openInTab: {
      type: Boolean,
      required: true,
    },
    itemClick: {
      type: Function,
    },
  },
  data() {
    return {
      inputValue: '',
      items: {},
      currentIndex: 0,
      highlightKey: '',
      hasOpenIntTabMethods: Note_Obj.GM.hasOpenIntTabMethods(),
    };
  },
  computed: {
    totalIndex() {
      let count = 0;
      for (const key in this.items) {
        this.items[key].isShow && count++;
      }
      return count;
    },
  },
  watch: {
    isShow(newValue, oldValue) {
      if (newValue !== oldValue && newValue) {
        this.restoreContentEvent();
        Note_Obj.fn.debounce(() => {
          try {
            if (newValue) {
              const ele = document.getElementById(this.id + '_searchFrameInputBox');
              ele && ele.focus() && ele.select();
            }
          } catch (e) {
            console.error('Error in focus command.', e);
          }
        }, 200);
      }
    },
    inputValue(newValue, oldValue) {
      if (newValue != oldValue) {
        Note_Obj.fn.debounce(() => {
          this.searchEvent(newValue);
        }, 250);
      }
    },
    currentIndex(newValue, oldValue) {
      if (newValue != oldValue) {
        for (const key in this.items) {
          this.items[key].highlight = this.items[key].index === newValue ? true : false;
        }
        this.setScrollBar(newValue);
      }
    },
    originalItems(_newValue, _oldValue) {
      if (this.isShow) {
        this.restoreContentEvent();
      }
    },
  },
  methods: {
    restoreContentEvent() {
      let index = 1;
      this.items = Object.assign({}, this.originalItems);
      for (const key in this.items) {
        this.items[key] = Object.assign({}, this.items[key], {
          isShow: true,
          index: index++,
          highlight: false,
        });
      }
    },
    searchEvent(value) {
      let index = 1;
      let find = false;
      let firstKey = '';
      let currentIndex = 0;
      for (const key in this.items) {
        let status = null;
        if (this.items[key].tag) {
          status = this.determineSearchString(value, this.items[key].tag);
        } else if (this.items[key].name) {
          status = this.determineSearchString(value, this.items[key].name);
        } else if (key) {
          status = this.determineSearchString(value, key);
        }
        if (status) {
          this.items[key].isShow = true;
          this.items[key].index = index;
          this.items[key].highlight = false;
          if (key === this.highlightKey) {
            this.items[key].highlight = true;
            currentIndex = index;
            find = true;
          }
          if (index === 1) {
            firstKey = key;
          }
          index++;
        } else {
          this.items[key].isShow = false;
          this.items[key].index = -1;
          this.items[key].highlight = false;
        }
      }
      if (!find) {
        this.highlightKey = firstKey;
        currentIndex = this.totalIndex > 0 ? 1 : 0;
        if (firstKey) {
          this.items[firstKey].highlight = true;
        }
      }
      this.$nextTick(() => {
        this.currentIndex = currentIndex;
      });
    },
    setScrollBar(index) {
      const tagsList = document.getElementById(this.id + '_searchFrameTagsList');
      const item = document.querySelector(`#${this.id}_searchFrameTagsList [data-index="${index}"]`);
      if (tagsList && item) {
        if (item.offsetTop - tagsList.scrollTop > 225) {
          tagsList.scrollTop = item.offsetTop - 225;
        } else if (item.offsetTop - tagsList.scrollTop < 0) {
          tagsList.scrollTop = item.offsetTop;
        }
      }
    },
    getSearchFrameKey(index) {
      if (index !== 0) {
        for (const key in this.items) {
          if (this.items[key].index === index) {
            return key;
          }
        }
      }
      return '';
    },
    keyDownEvent(event) {
      Note_Obj.fn.throttle(() => {
        if (event.keyCode === 38) {
          if (this.totalIndex === 0) {
            this.currentIndex = 0;
          } else if (this.currentIndex > 1) {
            this.currentIndex--;
          } else {
            this.currentIndex = this.totalIndex;
          }
        }
        if (event.keyCode === 40) {
          if (this.totalIndex === 0) {
            this.currentIndex = 0;
          } else if (this.currentIndex < this.totalIndex) {
            this.currentIndex++;
          } else {
            this.currentIndex = 1;
          }
        }
        if (event.keyCode === 33) {
          if (this.totalIndex === 0) {
            this.currentIndex = 0;
          } else if (this.currentIndex > 10) {
            this.currentIndex -= 10;
          } else if (this.currentIndex <= 1) {
            this.currentIndex = this.totalIndex;
          } else {
            this.currentIndex = 1;
          }
        }
        if (event.keyCode === 34) {
          if (this.totalIndex === 0) {
            this.currentIndex = 0;
          } else if (this.currentIndex < this.totalIndex - 9) {
            this.currentIndex += 10;
          } else if (this.currentIndex === this.totalIndex) {
            this.currentIndex = 1;
          } else {
            this.currentIndex = this.totalIndex;
          }
        }
        this.highlightKey = this.getSearchFrameKey(this.currentIndex);
      }, 250);
    },
    keyUpEvent(event) {
      if (event.keyCode === 13) {
        const highlightEle = document.querySelector(`#${this.id}_searchFrameTagsList .note-obj-search-frame-tags-list-item-highlight`);
        if (highlightEle) {
          const ev = event || window.event;
          const eCtrl = ev.ctrlKey || ev.metaKey;
          const eShift = ev.shiftKey;
          if (this.hasOpenIntTabMethods) {
            this.$emit('list-item-click', highlightEle.dataset.key, eCtrl, eShift);
          } else {
            Note_Obj.fn.openHyperlink(highlightEle, eCtrl, eShift);
          }
        }
      }
      if (event.keyCode === 113) {
        const highlightEle = document.querySelector(`#${this.id}_searchFrameTagsList .note-obj-search-frame-tags-list-item-highlight`);
        highlightEle && this.$emit('list-item-edit', highlightEle.dataset.key);
      }
      if (event.keyCode === 46) {
        const highlightEle = document.querySelector(`#${this.id}_searchFrameTagsList .note-obj-search-frame-tags-list-item-highlight`);
        highlightEle && this.$emit('list-item-delete', highlightEle.dataset.key);
      }
      if (event.keyCode === 27) {
        this.$emit('close-click');
      }
    },
    listItemMouseEnterEvent(event) {
      if (this.currentIndex != event.target.dataset.index) {
        this.currentIndex = Number(event.target.dataset.index);
        this.highlightKey = event.target.dataset.key;
      }
    },
  },
});
Vue.component('note-obj-add-frame', {
  render(createElement) {
    const self = this;
    return createElement(
      'div',
      {
        attrs: {
          id: this.id + '_addFramePresentation',
        },
        class: 'note-obj-add-frame-presentation',
        style: {
          display: this.isShow ? '' : 'none',
        },
        on: {
          click: event => {
            if (event.target !== event.currentTarget) return;
            self.$emit('presentation-click');
          },
        },
      },
      [
        createElement(
          'div',
          {
            class: 'note-obj-add-frame-dialog',
          },
          [
            createElement(
              'div',
              {
                attrs: {
                  id: this.id + '_addFrameUserInfo',
                },
                class: 'note-obj-add-frame-user-info',
              },
              [
                createElement('span', {
                  attrs: {
                    id: this.id + '_addFrameUserId',
                  },
                  class: 'note-obj-add-frame-user-id',
                  domProps: {
                    textContent: `${this.type === 'user' ? this.lang.userIdText : this.lang.scriptIdText}: ${this.userId}`,
                  },
                }),
                this.userName
                  ? createElement('span', {
                      attrs: {
                        id: this.id + '_addFrameUserName',
                      },
                      class: 'note-obj-add-frame-user-name',
                      domProps: {
                        textContent: `${this.type === 'user' ? this.lang.userNameText : this.lang.scriptNameText}: ${this.userName}`,
                      },
                    })
                  : null,
              ]
            ),
            createElement('input', {
              attrs: {
                id: this.id + '_addFrameInputBox',
                type: 'text',
                placeholder: this.lang.addPlaceholder,
              },
              class: 'note-obj-add-frame-input',
              domProps: {
                value: self.inputValue,
              },
              on: {
                change: event => {
                  self.inputValue = event.target.value.trim();
                },
                keyup: event => {
                  if (event.keyCode === 13 || event.keyCode === 27) {
                    event.preventDefault();
                    self.keyUpEvent(event);
                  }
                },
              },
            }),
            createElement('button', {
              attrs: {
                type: 'button',
                title: this.lang.groupTitle,
              },
              class: 'note-obj-add-frame-group-button',
              domProps: {
                textContent: this.currentGroupName,
              },
              on: {
                click: event => {
                  event.stopPropagation();
                  self.selectGroupFrameAddHandleId(resKey => {
                    self.currentGroupKey = resKey;
                  });
                },
              },
            }),
            createElement('button', {
              attrs: {
                type: 'button',
                title: this.lang.groupCreateValueTitle,
              },
              class: 'note-obj-add-frame-group-button',
              domProps: {
                textContent: this.lang.groupCreateValueText,
              },
              on: {
                click: event => {
                  event.stopPropagation();
                  self.$emit('create-group', this.userId);
                },
              },
            }),
          ].concat(
            Object.keys(this.buttonSet).map(key => {
              return createElement('button', {
                key: key,
                attrs: {
                  'data-key': key,
                  type: 'button',
                  title: this.buttonSet[key].title,
                },
                class: {
                  'note-obj-add-frame-button-bottom': this.buttonSet[key].isBottom,
                },
                domProps: {
                  textContent: this.buttonSet[key].text,
                },
                on: {
                  click: event => {
                    event.stopPropagation();
                    self.buttonClickEvent(event);
                  },
                },
              });
            })
          )
        ),
      ]
    );
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    lang: {
      type: Object,
      required: true,
    },
    isShow: {
      type: Boolean,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      default: '',
    },
    groupKey: {
      type: String,
      default: '',
    },
    buttonSet: {
      type: Object,
      required: true,
    },
    selectGroupFrameAddHandleId: {
      type: Function,
      required: true,
    },
    group: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['user', 'script'].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      inputValue: this.value,
      currentGroupKey: this.groupKey,
    };
  },
  computed: {
    currentGroupName() {
      if (!this.currentGroupKey || this.currentGroupKey === 'default' || !this.group[this.currentGroupKey]) {
        return this.lang.defaultGroupText;
      } else {
        return this.group[this.currentGroupKey].value;
      }
    },
  },
  watch: {
    isShow(newValue, oldValue) {
      if (newValue !== oldValue && newValue) {
        this.inputValue = this.value;
        this.currentGroupKey = this.groupKey;
        Note_Obj.fn.debounce(() => {
          try {
            if (newValue) {
              const ele = document.getElementById(this.id + '_addFrameInputBox');
              ele && ele.focus() && ele.select();
            }
          } catch (e) {
            console.error('Error in focus command.', e);
          }
        }, 200);
      }
    },
    groupKey(newValue, oldValue) {
      if (newValue != oldValue) {
        this.currentGroupKey = this.groupKey;
      }
    },
  },
  methods: {
    keyUpEvent(event) {
      if (event.keyCode === 13) {
        this.$emit('save-event', this.userId, this.userName, this.inputValue, this.currentGroupKey);
      }
      if (event.keyCode === 27) {
        this.$emit('quit-frame');
      }
    },
    buttonClickEvent(event) {
      const ev = event || window.event;
      const eCtrl = ev.ctrlKey || ev.metaKey;
      const key = event.target.dataset.key;
      if (eCtrl && !['save', 'clear', 'cancel'].includes(key)) {
        this.inputValue = this.buttonSet[key].event(this.userId, this.userName, this.inputValue, this.currentGroupKey, key, true);
      } else {
        this.$emit('button-click', this.userId, this.userName, this.inputValue, this.currentGroupKey, key);
      }
    },
  },
});
Vue.component('note-obj-management-frame', {
  render(createElement) {
    if (this.isInsert) {
      const self = this;
      return createElement(
        'div',
        {
          attrs: {
            id: this.id + '_managementFramePresentation',
          },
          class: 'note-obj-management-frame-presentation',
        },
        [
          createElement(
            'div',
            {
              class: 'note-obj-management-frame-dialog',
            },
            [
              createElement(
                'div',
                {
                  class: 'note-obj-management-frame-header',
                },
                [
                  createElement('form', [
                    createElement('label', {
                      attrs: {
                        for: this.id + '_managementFrameSearchInputBox',
                      },
                      domProps: {
                        textContent: this.lang.searchContentText,
                      },
                    }),
                    createElement('input', {
                      attrs: {
                        type: 'text',
                        id: this.id + '_managementFrameSearchInputBox',
                        placeholder: this.lang.searchContentPlaceholder,
                      },
                      class: 'note-obj-management-frame-search-input',
                      on: {
                        input: event => {
                          self.inputValue = event.target.value.trim();
                        },
                        keydown: event => {
                          if (event.keyCode === 13) {
                            event.stopPropagation();
                            event.preventDefault();
                            console.log('Just to intercept the carriage return event.');
                          }
                        },
                      },
                    }),
                    createElement('label', {
                      attrs: {
                        for: this.id + '_managementFrameRangeSelect',
                      },
                      domProps: {
                        textContent: this.lang.rangeText,
                      },
                    }),
                    createElement(
                      'select',
                      {
                        attrs: {
                          id: this.id + '_managementFrameRangeSelect',
                          name: 'managementFrameRangeSelect',
                        },
                        on: {
                          change: event => {
                            self.rangeSelectValue = event.target.value;
                          },
                        },
                      },
                      [
                        createElement('option', {
                          attrs: {
                            value: 'all',
                          },
                          domProps: {
                            textContent: this.lang.rangeAllText,
                          },
                        }),
                        createElement('option', {
                          attrs: {
                            value: 'id',
                          },
                          domProps: {
                            textContent: this.type === 'user' ? this.lang.userIdText : this.lang.scriptIdText,
                          },
                        }),
                        createElement('option', {
                          attrs: {
                            value: 'name',
                          },
                          domProps: {
                            textContent: this.type === 'user' ? this.lang.userNameText : this.lang.scriptNameText,
                          },
                        }),
                        createElement('option', {
                          attrs: {
                            value: 'tag',
                          },
                          domProps: {
                            textContent: this.lang.userTagTableText,
                          },
                        }),
                      ]
                    ),
                    createElement('label', {
                      attrs: {
                        for: this.id + '_managementFrameGroupSelect',
                      },
                      domProps: {
                        textContent: this.lang.groupText + ': ',
                      },
                    }),
                    createElement(
                      'select',
                      {
                        attrs: {
                          id: this.id + '_managementFrameGroupSelect',
                          name: 'managementFrameGroupSelect',
                        },
                        on: {
                          change: event => {
                            self.groupSelectValue = event.target.value;
                          },
                        },
                      },
                      [
                        createElement('option', {
                          attrs: {
                            value: '',
                          },
                          domProps: {
                            textContent: this.lang.rangeAllText,
                          },
                        }),
                      ].concat(
                        Object.keys(this.group).map(key => {
                          return createElement('option', {
                            key: key,
                            attrs: {
                              value: key,
                            },
                            domProps: {
                              textContent: key === 'default' ? this.lang.defaultGroupText : this.group[key].value,
                            },
                          });
                        })
                      )
                    ),
                    createElement('span', {
                      attrs: {
                        id: this.id + '_managementFrameShowNumber',
                      },
                      class: 'note-obj-management-frame-show-number',
                      domProps: {
                        textContent: `${this.selectedNumber}/${this.totalNumber}`,
                      },
                    }),
                  ]),
                ]
              ),
              createElement(
                'div',
                {
                  class: 'note-obj-management-frame-content',
                },
                [
                  createElement(
                    'div',
                    {
                      class: 'note-obj-management-frame-thead',
                    },
                    [
                      createElement('table', [
                        createElement('thead', [
                          createElement('tr', [
                            createElement('th', [
                              createElement('input', {
                                attrs: {
                                  type: 'checkbox',
                                  title: this.lang.selectAllTitle,
                                },
                                domProps: {
                                  checked: self.selectAllChecked,
                                },
                                on: {
                                  change: event => {
                                    self.selectAllChecked = event.target.checked;
                                  },
                                },
                              }),
                            ]),
                            createElement('th', {
                              attrs: {
                                title: this.type === 'user' ? this.lang.userIdText : this.lang.scriptIdText,
                              },
                              domProps: {
                                textContent: this.type === 'user' ? this.lang.userIdText : this.lang.scriptIdText,
                              },
                            }),
                            createElement('th', {
                              attrs: {
                                title: this.type === 'user' ? this.lang.userNameText : this.lang.scriptNameText,
                              },
                              domProps: {
                                textContent: this.type === 'user' ? this.lang.userNameText : this.lang.scriptNameText,
                              },
                            }),
                            createElement('th', {
                              attrs: {
                                title: this.lang.userTagTableText,
                              },
                              domProps: {
                                textContent: this.lang.userTagTableText,
                              },
                            }),
                            createElement('th', {
                              attrs: {
                                title: this.lang.groupText,
                              },
                              domProps: {
                                textContent: this.lang.groupText,
                              },
                            }),
                            createElement('th', {
                              attrs: {
                                title: this.lang.editText,
                              },
                              domProps: {
                                textContent: this.lang.editText,
                              },
                            }),
                            createElement('th', {
                              attrs: {
                                title: this.lang.deleteText,
                              },
                              domProps: {
                                textContent: this.lang.deleteText,
                              },
                            }),
                          ]),
                        ]),
                      ]),
                    ]
                  ),
                  createElement(
                    'div',
                    {
                      class: 'note-obj-management-frame-tbody',
                    },
                    [
                      createElement('table', [
                        createElement(
                          'tbody',
                          {
                            attrs: {
                              id: this.id + '_managementFrameTableTbody',
                            },
                          },
                          Object.keys(this.items).map(key => {
                            const newUrl = typeof this.itemClick === 'function' ? this.itemClick(key) : `${window.location.origin}/${key}`;
                            return createElement(
                              'tr',
                              {
                                key: key,
                                style: {
                                  display: this.items[key].isExists && this.items[key].isShow ? '' : 'none',
                                },
                              },
                              [
                                createElement('td', [
                                  createElement('note-obj-input-checkbox', {
                                    props: {
                                      isSelected: this.items[key].isSelected,
                                    },
                                    on: {
                                      'checked-change': value => {
                                        self.items[key].isSelected = value;
                                      },
                                    },
                                  }),
                                ]),
                                createElement('td', [
                                  createElement('a', {
                                    attrs: {
                                      title: key,
                                      target: '_blank',
                                      href: newUrl,
                                    },
                                    class: 'note-obj-management-frame-item-a',
                                    domProps: {
                                      textContent: key,
                                    },
                                  }),
                                ]),
                                createElement('td', {
                                  attrs: {
                                    title: this.items[key].name || key,
                                  },
                                  domProps: {
                                    textContent: this.items[key].name || key,
                                  },
                                }),
                                createElement('td', [
                                  createElement('note-obj-management-input-text', {
                                    props: {
                                      value: this.items[key].tag,
                                      dataKey: key,
                                      isContentEditAble: this.items[key].isContentEditAble,
                                      className: 'note-obj-management-frame-item-input-tag',
                                    },
                                    on: {
                                      'item-key-up': event => {
                                        self.listItemKeyUpEvent(event);
                                      },
                                    },
                                  }),
                                ]),
                                createElement('td', [
                                  createElement('note-obj-management-group-item', {
                                    props: {
                                      groupValue: this.items[key].group,
                                      groupSet: this.group,
                                      text: this.lang.defaultGroupText,
                                      title: this.lang.groupTitle,
                                      dataKey: key,
                                    },
                                    on: {
                                      'click-event'(keyValue) {
                                        self.selectGroupFrameAddHandleId(resKey => {
                                          self.items[keyValue].group = resKey;
                                          self.isModify = true;
                                        });
                                      },
                                    },
                                  }),
                                ]),
                                createElement('td', [
                                  createElement('span', {
                                    attrs: {
                                      'data-key': key,
                                      title: this.lang.editTitle,
                                    },
                                    class: {
                                      'note-obj-management-frame-item-btn': true,
                                      'note-obj-management-frame-item-edit': true,
                                      'note-obj-management-frame-item-ok': this.items[key].isContentEditAble,
                                    },
                                    on: {
                                      click(event) {
                                        event.stopPropagation();
                                        self.listItemEditEvent(event.target.dataset.key);
                                      },
                                    },
                                  }),
                                ]),
                                createElement('td', [
                                  createElement('span', {
                                    attrs: {
                                      'data-key': key,
                                      title: this.lang.deleteTitle,
                                    },
                                    class: 'note-obj-management-frame-item-btn note-obj-management-frame-item-delete',
                                    on: {
                                      click: event => {
                                        event.stopPropagation();
                                        self.listItemDeleteEvent(event.target.dataset.key);
                                      },
                                    },
                                  }),
                                ]),
                              ]
                            );
                          })
                        ),
                      ]),
                    ]
                  ),
                ]
              ),
              createElement(
                'div',
                {
                  class: 'note-obj-management-frame-tool',
                },
                [
                  createElement('button', {
                    attrs: {
                      type: 'button',
                      id: this.id + '_managementFrameDeselectAll',
                      title: this.lang.deselectAllTitle,
                    },
                    class: 'note-obj-management-frame-deselect-all',
                    domProps: {
                      textContent: this.lang.deselectAllText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.deselectAllEvent();
                      },
                    },
                  }),
                  createElement('button', {
                    attrs: {
                      type: 'button',
                      id: this.id + '_managementFrameDeleteSelected',
                      title: this.lang.deleteSelectedTitle,
                    },
                    class: 'note-obj-management-frame-delete-selected',
                    domProps: {
                      textContent: this.lang.deleteSelectedText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.deleteSelectedEvent();
                      },
                    },
                  }),
                  createElement('button', {
                    attrs: {
                      type: 'button',
                      id: this.id + '_managementFrameClearSelected',
                      title: this.lang.clearSelectedTitle,
                    },
                    class: 'note-obj-management-frame-clear-selected',
                    domProps: {
                      textContent: this.lang.clearSelectedText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.clearSelectedEvent();
                      },
                    },
                  }),
                  createElement('button', {
                    attrs: {
                      type: 'button',
                      id: this.id + '_managementFrameMoveSeleced',
                      title: this.lang.moveSelectedTitle,
                    },
                    class: 'note-obj-management-frame-move-selected',
                    domProps: {
                      textContent: this.lang.moveSelectedText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.moveSelecteEvent();
                      },
                    },
                  }),
                  createElement('button', {
                    attrs: {
                      type: 'button',
                      id: this.id + '_managementFrameExportSelected',
                      title: this.lang.exportSelectedTitle,
                      disabled: this.isModify,
                    },
                    class: 'note-obj-management-frame-export-selected',
                    domProps: {
                      textContent: this.lang.exportSelectedText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.exportSelectedEvent();
                      },
                    },
                  }),
                  createElement('button', {
                    attrs: {
                      type: 'button',
                      id: this.id + '_managementFrameImportContent',
                      title: this.lang.importContentTitle,
                    },
                    class: 'note-obj-management-frame-import-content',
                    domProps: {
                      textContent: this.lang.importContentText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.imoprtContentEvent();
                      },
                    },
                  }),
                  createElement('button', {
                    attrs: {
                      type: 'button',
                      id: this.id + '_managementFrameManageGroups',
                      title: this.lang.manageGroupsTitle,
                    },
                    class: 'note-obj-management-frame-manage-groups',
                    domProps: {
                      textContent: this.lang.manageGroupsText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.$emit('manage-groups');
                      },
                    },
                  }),
                  createElement('button', {
                    attrs: {
                      type: 'button',
                      id: this.id + '_managementFrameCreateNewGroup',
                      title: this.lang.groupCreateValueTitle,
                    },
                    class: 'note-obj-management-frame-create-new-group',
                    domProps: {
                      textContent: this.lang.groupCreateValueText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.$emit('create-group');
                      },
                    },
                  }),
                ]
              ),
              createElement(
                'div',
                {
                  class: 'note-obj-management-frame-footer',
                },
                [
                  createElement('span', {
                    attrs: {
                      title: this.lang.restoreContentTitle,
                      id: this.id + '_managementFrameRestoreContent',
                    },
                    class: {
                      'note-obj-management-frame-restore-content': true,
                      'note-obj-management-frame-restore-content-enabled': this.isModify,
                    },
                    domProps: {
                      textContent: this.lang.restoreContentText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.restoreContentEvent();
                      },
                    },
                  }),
                  createElement('span', {
                    attrs: {
                      id: this.id + '_managementFrameShowModifyText',
                    },
                    class: 'note-obj-management-frame-show-modify-text',
                    style: {
                      display: this.isModify ? '' : 'none',
                    },
                    domProps: {
                      textContent: this.lang.modifyText,
                    },
                  }),
                  createElement('span', {
                    attrs: {
                      id: this.id + '_managementFrameShowWaitText',
                    },
                    class: 'note-obj-management-frame-show-wait-text',
                    style: {
                      display: this.isWait ? '' : 'none',
                    },
                    domProps: {
                      textContent: this.lang.waitText,
                    },
                  }),
                  createElement('span', {
                    attrs: {
                      id: this.id + '_managementFrameSaveContent',
                      title: this.lang.saveContentTitle,
                    },
                    class: 'note-obj-management-frame-save-content',
                    domProps: {
                      textContent: this.lang.saveContentText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.saveContentEvent();
                      },
                    },
                  }),
                  createElement('span', {
                    attrs: {
                      id: this.id + '_managementFrameCancelContent',
                      title: this.lang.cancelContentTitle,
                    },
                    class: 'note-obj-management-frame-cancel-content',
                    domProps: {
                      textContent: this.lang.cancelContentText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.cancelContentEvent();
                      },
                    },
                  }),
                ]
              ),
            ]
          ),
        ]
      );
    }
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    lang: {
      type: Object,
      required: true,
    },
    isInsert: {
      type: Boolean,
      required: true,
    },
    originalItems: {
      type: Object,
      required: true,
    },
    determineSearchString: {
      type: Function,
      required: true,
    },
    group: {
      type: Object,
      required: true,
    },
    selectGroupFrameAddHandleId: {
      type: Function,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['user', 'script'].indexOf(value) !== -1;
      },
    },
    itemClick: {
      type: Function,
      requreid: true,
    },
  },
  data() {
    return {
      inputValue: '',
      isModify: false,
      rangeSelectValue: 'all',
      groupSelectValue: '',
      items: {},
      isWait: false,
    };
  },
  computed: {
    totalNumber() {
      let count = 0;
      for (const key in this.items) {
        this.items[key].isExists && count++;
      }
      return count;
    },
    selectedNumber() {
      let count = 0;
      for (const key in this.items) {
        this.items[key].isExists && this.items[key].isShow && this.items[key].isSelected && count++;
      }
      return count;
    },
    selectAllChecked: {
      get() {
        for (const key in this.items) {
          if (this.items[key].isExists && this.items[key].isShow && !this.items[key].isSelected) {
            return false;
          }
        }
        return true;
      },
      set(value) {
        for (const key in this.items) {
          if (this.items[key].isExists && this.items[key].isShow) {
            if (value && !this.items[key].isSelected) {
              this.items[key].isSelected = true;
            } else if (!value && this.items[key].isSelected) {
              this.items[key].isSelected = false;
            }
          }
        }
      },
    },
  },
  watch: {
    inputValue(newValue, oldValue) {
      if (newValue != oldValue) {
        Note_Obj.fn.debounce(() => {
          this.searchEvent(newValue);
        }, 250);
      }
    },
    rangeSelectValue(newValue, oldValue) {
      if (newValue != oldValue) {
        this.searchEvent(this.inputValue);
      }
    },
    groupSelectValue(newValue, oldValue) {
      if (newValue != oldValue) {
        this.searchEvent(this.inputValue);
      }
    },
    isInsert(newValue, oldValue) {
      if (newValue != oldValue && newValue) {
        if (Object.keys(this.originalItems).length > 50) {
          this.items = {};
          this.isWait = true;
          Note_Obj.fn.debounce(() => {
            this.restoreContentEvent();
          }, 50);
        } else {
          this.restoreContentEvent();
        }
      }
    },
    originalItems(_newValue, _oldValue) {
      if (this.isInsert) {
        this.isModify = false;
        this.searchEvent(this.inputValue);
      }
    },
  },
  methods: {
    searchEvent(value) {
      const groupKeysList = Object.keys(this.group);
      for (const key in this.items) {
        if (this.items[key].isExists) {
          let showStatus = null;
          if (
            !this.groupSelectValue ||
            this.groupSelectValue === this.items[key].group ||
            (this.groupSelectValue === 'default' && !groupKeysList.includes(this.items[key].group))
          ) {
            if (this.rangeSelectValue === 'all') {
              showStatus =
                this.determineSearchString(value, key) ||
                this.determineSearchString(value, this.items[key].name) ||
                this.determineSearchString(value, this.items[key].tag);
            } else if (this.rangeSelectValue === 'id') {
              showStatus = this.determineSearchString(value, key);
            } else if (this.rangeSelectValue === 'name') {
              showStatus = this.determineSearchString(value, this.items[key].name);
            } else if (this.rangeSelectValue === 'tag') {
              showStatus = this.determineSearchString(value, this.items[key].tag);
            }
          } else {
            showStatus = false;
          }
          this.items[key].isShow = showStatus;
        }
      }
    },
    restoreContentEvent(_event) {
      this.inputValue = '';
      this.rangeSelectValue = 'all';
      this.groupSelectValue = '';
      this.isWait = false;
      this.isModify = false;
      this.items = Object.assign({}, this.originalItems);
      for (const key in this.items) {
        if (this.items[key].group == null) {
          this.items[key] = Object.assign({}, this.items[key], {
            group: '',
            isExists: true,
            isShow: true,
            isSelected: false,
            isContentEditAble: false,
          });
        } else {
          this.items[key] = Object.assign({}, this.items[key], {
            isExists: true,
            isShow: true,
            isSelected: false,
            isContentEditAble: false,
          });
        }
      }
    },
    itemInputEvent(key) {
      const inputValue = document.querySelector('.note-obj-management-frame-item-input-tag[data-key="' + key + '"]').value.trim();
      this.items[key].tag = inputValue;
      this.isModify = true;
      this.items[key].isContentEditAble = false;
    },
    deselectAllEvent(_event) {
      for (const key in this.items) {
        if (this.items[key].isExists && this.items[key].isSelected) {
          this.items[key].isSelected = false;
        }
      }
    },
    listItemEditEvent(key) {
      if (this.items[key].isContentEditAble) {
        this.itemInputEvent(key);
      } else {
        this.items[key].isContentEditAble = true;
        Note_Obj.fn.debounce(() => {
          try {
            const inputDom = document.querySelector('.note-obj-management-frame-item-input-tag[data-key="' + key + '"]');
            if (inputDom) {
              inputDom.focus();
              inputDom.select();
            }
          } catch (e) {
            console.error('Error in focus command.', e);
          }
        }, 200);
      }
    },
    listItemDeleteEvent(key) {
      this.items[key].isExists = false;
      this.isModify = true;
    },
    listItemKeyUpEvent(event) {
      if (this.items[event.target.dataset.key].isContentEditAble) {
        if (event.keyCode === 13) {
          this.itemInputEvent(event.target.dataset.key);
        }
        if (event.keyCode === 27) {
          this.items[event.target.dataset.key].tag = this.originalItems[event.target.dataset.key]
            ? this.originalItems[event.target.dataset.key].tag
            : '';
          this.items[event.target.dataset.key].isContentEditAble = false;
        }
      }
    },
    deleteSelectedEvent(_evnet) {
      for (const key in this.items) {
        if (this.items[key].isExists && this.items[key].isShow && this.items[key].isSelected) {
          this.items[key].isExists = false;
          this.isModify = true;
        }
      }
    },
    clearSelectedEvent(_event) {
      for (const key in this.items) {
        if (this.items[key].isExists && this.items[key].isShow && this.items[key].isSelected) {
          this.items[key].tag = '';
          this.isModify = true;
        }
      }
    },
    moveSelecteEvent(_event) {
      const moveList = [];
      for (const key in this.items) {
        if (this.items[key].isExists && this.items[key].isShow && this.items[key].isSelected) {
          moveList.push(key);
        }
      }
      if (moveList.length > 0) {
        this.selectGroupFrameAddHandleId(resKey => {
          moveList.forEach(mKey => {
            this.items[mKey].group = resKey;
          });
          this.isModify = true;
        });
      }
    },
    exportSelectedEvent(_event) {
      if (!this.isModify) {
        const exportObj = {};
        for (const key in this.items) {
          if (this.items[key].isExists && this.items[key].isShow && this.items[key].isSelected) {
            exportObj[key] = {
              tag: this.originalItems[key].tag,
              name: this.originalItems[key].name || key,
            };
            if (this.originalItems[key].group && this.originalItems[key].group !== 'default') {
              exportObj[key].group = this.originalItems[key].group;
            }
          }
        }
        Object.keys(exportObj).length > 0 &&
          Note_Obj.fn.downloadText(JSON.stringify(exportObj), `${this.id}_list_${Date.now()}.txt`, () => {
            this.$emit('message-event', this.lang.exportNotifactionText.replace('%s', Object.keys(exportObj).length));
          });
      }
    },
    imoprtContentEvent(_event) {
      Note_Obj.fn.openFile((res, content) => {
        if (res) {
          if (content) {
            try {
              const importObj = JSON.parse(content);
              if (typeof importObj === 'object' && importObj) {
                for (const key in importObj) {
                  if (importObj[key].tag == null) {
                    delete importObj[key];
                  } else {
                    if (!importObj[key].name && importObj[key].group == null) {
                      importObj[key] = Object.assign({}, importObj[key], {
                        name: key,
                        group: '',
                        isExists: true,
                        isShow: true,
                        isSelected: false,
                        isContentEditAble: false,
                      });
                    } else if (!importObj[key].name) {
                      importObj[key] = Object.assign({}, importObj[key], {
                        name: key,
                        isExists: true,
                        isShow: true,
                        isSelected: false,
                        isContentEditAble: false,
                      });
                    } else if (importObj[key].group == null) {
                      importObj[key] = Object.assign({}, importObj[key], {
                        group: '',
                        isExists: true,
                        isShow: true,
                        isSelected: false,
                        isContentEditAble: false,
                      });
                    } else {
                      importObj[key] = Object.assign({}, importObj[key], {
                        isExists: true,
                        isShow: true,
                        isSelected: false,
                        isContentEditAble: false,
                      });
                    }
                  }
                }
                if (Object.keys(importObj).length > 0) {
                  this.items = Object.assign({}, this.items, importObj);
                }
                this.searchEvent(this.inputValue);
                this.isModify = true;
                this.$emit('message-event', this.lang.importNotifactionText.replace('%s', Object.keys(importObj).length));
              } else {
                console.warn('Content is not an object.');
                this.$emit('message-event', this.lang.notObjectNotifactionText);
              }
            } catch (e) {
              console.error('There was an error in the parsing of the object.', e);
              this.$emit('message-event', this.lang.errorImportNotifactionText);
            }
          } else {
            console.warn('The contents of the file are empty.');
            this.$emit('message-event', this.lang.emptyFileNotifactionText);
          }
        } else {
          content === 'valid' && this.$emit('message-event', this.lang.incorrectFileSelectedNotifactionText);
        }
      });
    },
    saveContentEvent(_event) {
      if (this.isModify) {
        const saveObj = {};
        for (const key in this.items) {
          if (this.items[key].isExists) {
            saveObj[key] = {
              tag: this.items[key].tag,
              name: this.items[key].name || key,
            };
            if (this.items[key].group && this.items[key].group !== 'default') {
              saveObj[key].group = this.items[key].group;
            }
          }
        }
        this.$emit('save-event', saveObj);
      } else {
        this.$emit('quit-frame');
      }
    },
    cancelContentEvent(_event) {
      this.$emit('quit-frame');
    },
  },
});
Vue.component('note-obj-group-frame', {
  render(createElement) {
    if (this.isInsert) {
      const self = this;
      return createElement(
        'div',
        {
          attrs: {
            id: this.id + '_groupFramePresentation',
          },
          class: 'note-obj-group-frame-presentation',
        },
        [
          createElement(
            'div',
            {
              class: 'note-obj-group-frame-dialog',
            },
            [
              createElement(
                'div',
                {
                  class: 'note-obj-group-frame-header',
                },
                [
                  createElement('form', [
                    createElement('label', {
                      attrs: {
                        for: this.id + '_groupFrameSearchInputBox',
                      },
                      domProps: {
                        textContent: this.lang.searchContentText,
                      },
                    }),
                    createElement('input', {
                      attrs: {
                        type: 'text',
                        id: this.id + '_groupFrameSearchInputBox',
                        placeholder: this.lang.searchContentPlaceholder,
                      },
                      class: 'note-obj-group-frame-search-input',
                      on: {
                        input: event => {
                          self.inputValue = event.target.value.trim();
                        },
                        keydown: event => {
                          if (event.keyCode === 13) {
                            event.stopPropagation();
                            event.preventDefault();
                            console.log('Just to intercept the carriage return event.');
                          }
                        },
                      },
                    }),
                    createElement('span', {
                      attrs: {
                        id: this.id + '_groupFrameShowNumber',
                      },
                      class: 'note-obj-group-frame-show-number',
                      domProps: {
                        textContent: this.selectedNumber + '/' + this.totalNumber,
                      },
                    }),
                  ]),
                ]
              ),
              createElement(
                'div',
                {
                  class: 'note-obj-group-frame-content',
                },
                [
                  createElement(
                    'div',
                    {
                      class: 'note-obj-group-frame-thead',
                    },
                    [
                      createElement('table', [
                        createElement('thead', [
                          createElement('tr', [
                            createElement('th', [
                              createElement('input', {
                                attrs: {
                                  type: 'checkbox',
                                  title: this.lang.selectAllTitle,
                                },
                                domProps: {
                                  checked: self.selectAllChecked,
                                },
                                on: {
                                  change: event => {
                                    self.selectAllChecked = event.target.checked;
                                  },
                                },
                              }),
                            ]),
                            createElement('th', {
                              attrs: {
                                title: this.lang.groupValueText,
                              },
                              domProps: {
                                textContent: this.lang.groupValueText,
                              },
                            }),
                            createElement('th', {
                              attrs: {
                                title: this.lang.groupPrimaryColorText,
                              },
                              domProps: {
                                textContent: this.lang.groupPrimaryColorText,
                              },
                            }),
                            createElement('th', {
                              attrs: {
                                title: this.lang.groupSecondaryColorText,
                              },
                              domProps: {
                                textContent: this.lang.groupSecondaryColorText,
                              },
                            }),
                            createElement('th', {
                              attrs: {
                                title: this.lang.groupWeightText,
                              },
                              domProps: {
                                textContent: this.lang.groupWeightText,
                              },
                            }),
                            createElement('th', {
                              attrs: {
                                title: this.lang.editText,
                              },
                              domProps: {
                                textContent: this.lang.editText,
                              },
                            }),
                            createElement('th', {
                              attrs: {
                                title: this.lang.deleteText,
                              },
                              domProps: {
                                textContent: this.lang.deleteText,
                              },
                            }),
                          ]),
                        ]),
                      ]),
                    ]
                  ),
                  createElement(
                    'div',
                    {
                      class: 'note-obj-group-frame-tbody',
                    },
                    [
                      createElement('table', [
                        createElement(
                          'tbody',
                          {
                            attrs: {
                              id: this.id + '_groupFrameTableTbody',
                            },
                          },
                          Object.keys(this.items).map(key => {
                            return createElement(
                              'tr',
                              {
                                key: key,
                                style: {
                                  display: this.items[key].isExists && this.items[key].isShow ? '' : 'none',
                                },
                              },
                              [
                                createElement('td', [
                                  createElement('note-obj-input-checkbox', {
                                    props: {
                                      isSelected: this.items[key].isSelected,
                                    },
                                    on: {
                                      'checked-change': value => {
                                        this.items[key].isSelected = value;
                                      },
                                    },
                                  }),
                                ]),
                                createElement('td', [
                                  createElement('note-obj-management-input-text', {
                                    props: {
                                      value: this.items[key].value,
                                      dataKey: key,
                                      isContentEditAble: this.items[key].isContentEditAble,
                                      className: 'note-obj-group-frame-item-input-value',
                                    },
                                    on: {
                                      'item-key-up': event => {
                                        self.listItemKeyUpEvent(event);
                                      },
                                    },
                                  }),
                                ]),
                                createElement('td', [
                                  createElement('input', {
                                    attrs: {
                                      type: 'color',
                                      'data-key': key,
                                    },
                                    domProps: {
                                      value: this.items[key].primaryColor,
                                    },
                                    on: {
                                      change: event => {
                                        self.items[event.target.dataset.key].primaryColor = event.target.value;
                                        self.isModify = true;
                                      },
                                    },
                                  }),
                                ]),
                                createElement('td', [
                                  createElement('input', {
                                    attrs: {
                                      type: 'color',
                                      'data-key': key,
                                    },
                                    domProps: {
                                      value: this.items[key].secondaryColor,
                                    },
                                    on: {
                                      change: event => {
                                        self.items[event.target.dataset.key].secondaryColor = event.target.value;
                                        self.isModify = true;
                                      },
                                    },
                                  }),
                                ]),
                                createElement('td', [
                                  createElement('input', {
                                    attrs: {
                                      type: 'number',
                                      'data-key': key,
                                      step: 1,
                                      min: -100,
                                      max: 100,
                                    },
                                    domProps: {
                                      value: this.items[key].weight,
                                    },
                                    on: {
                                      change: event => {
                                        self.items[event.target.dataset.key].weight = event.target.value;
                                        self.isModify = true;
                                      },
                                    },
                                  }),
                                ]),
                                createElement('td', [
                                  createElement('span', {
                                    attrs: {
                                      'data-key': key,
                                      title: this.lang.editTitle,
                                    },
                                    class: {
                                      'note-obj-group-frame-item-btn': true,
                                      'note-obj-group-frame-item-edit': true,
                                      'note-obj-group-frame-item-ok': this.items[key].isContentEditAble,
                                    },
                                    on: {
                                      click: event => {
                                        event.stopPropagation();
                                        self.listItemEditEvent(event.target.dataset.key);
                                      },
                                    },
                                  }),
                                ]),
                                createElement('td', [
                                  createElement('span', {
                                    attrs: {
                                      'data-key': key,
                                      title: this.lang.deleteTitle,
                                    },
                                    class: 'note-obj-group-frame-item-btn note-obj-group-frame-item-delete',
                                    on: {
                                      click: event => {
                                        event.stopPropagation();
                                        self.listItemDeleteEvent(event.target.dataset.key);
                                      },
                                    },
                                  }),
                                ]),
                              ]
                            );
                          })
                        ),
                      ]),
                    ]
                  ),
                ]
              ),
              createElement(
                'div',
                {
                  class: 'note-obj-group-frame-tool',
                },
                [
                  createElement('button', {
                    attrs: {
                      type: 'button',
                      id: this.id + '_groupFrameDeselectAll',
                      title: this.lang.deselectAllTitle,
                    },
                    class: 'note-obj-group-frame-deselect-all',
                    domProps: {
                      textContent: this.lang.deselectAllText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.deselectAllEvent();
                      },
                    },
                  }),
                  createElement('button', {
                    attrs: {
                      type: 'button',
                      id: this.id + '_groupFrameDeleteSelected',
                      title: this.lang.deleteSelectedTitle,
                    },
                    class: 'note-obj-group-frame-delete-selected',
                    domProps: {
                      textContent: this.lang.deleteSelectedText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.deleteSelectedEvent();
                      },
                    },
                  }),
                  createElement('button', {
                    attrs: {
                      type: 'button',
                      id: this.id + '_groupFrameExportSelected',
                      title: this.lang.exportSelectedTitle,
                      disabled: this.isModify,
                    },
                    class: 'note-obj-group-frame-export-selected',
                    domProps: {
                      textContent: this.lang.exportSelectedText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.exportSelectedEvent();
                      },
                    },
                  }),
                  createElement('button', {
                    attrs: {
                      type: 'button',
                      id: this.id + '_groupFrameImportContent',
                      title: this.lang.importContentTitle,
                    },
                    class: 'note-obj-group-frame-import-content',
                    domProps: {
                      textContent: this.lang.importContentText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.imoprtContentEvent();
                      },
                    },
                  }),
                  createElement('button', {
                    attrs: {
                      type: 'button',
                      id: this.id + '_groupFrameCreateValue',
                      title: this.lang.groupCreateValueTitle,
                    },
                    class: 'note-obj-group-frame-create-value',
                    domProps: {
                      textContent: this.lang.groupCreateValueText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.createValueEvent();
                      },
                    },
                  }),
                ]
              ),
              createElement(
                'div',
                {
                  class: 'note-obj-management-frame-footer',
                },
                [
                  createElement('span', {
                    attrs: {
                      title: this.lang.restoreContentTitle,
                      id: this.id + '_groupFrameRestoreContent',
                    },
                    class: {
                      'note-obj-group-frame-restore-content': true,
                      'note-obj-group-frame-restore-content-enabled': this.isModify,
                    },
                    domProps: {
                      textContent: this.lang.restoreContentText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.restoreContentEvent();
                      },
                    },
                  }),
                  createElement('span', {
                    attrs: {
                      id: this.id + '_groupFrameShowModifyText',
                    },
                    class: 'note-obj-group-frame-show-modify-text',
                    style: {
                      display: this.isModify ? '' : 'none',
                    },
                    domProps: {
                      textContent: this.lang.modifyText,
                    },
                  }),
                  createElement('span', {
                    attrs: {
                      id: this.id + '_groupFrameShowWaitText',
                    },
                    class: 'note-obj-group-frame-show-wait-text',
                    style: {
                      display: this.isWait ? '' : 'none',
                    },
                    domProps: {
                      textContent: this.lang.waitText,
                    },
                  }),
                  createElement('span', {
                    attrs: {
                      id: this.id + '_groupFrameSaveContent',
                      title: this.lang.saveContentTitle,
                    },
                    class: 'note-obj-group-frame-save-content',
                    domProps: {
                      textContent: this.lang.saveContentText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.saveContentEvent();
                      },
                    },
                  }),
                  createElement('span', {
                    attrs: {
                      id: this.id + '_groupFrameCancelContent',
                      title: this.lang.cancelContentTitle,
                    },
                    class: 'note-obj-group-frame-cancel-content',
                    domProps: {
                      textContent: this.lang.cancelContentText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.cancelContentEvent();
                      },
                    },
                  }),
                ]
              ),
            ]
          ),
        ]
      );
    }
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    lang: {
      type: Object,
      required: true,
    },
    isInsert: {
      type: Boolean,
      required: true,
    },
    originalItems: {
      type: Object,
      required: true,
    },
    determineSearchString: {
      type: Function,
      required: true,
    },
    defaultColor: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      items: {},
      inputValue: '',
      isModify: false,
      isWait: false,
    };
  },
  computed: {
    totalNumber() {
      let count = 0;
      for (const key in this.items) {
        this.items[key].isExists && count++;
      }
      return count;
    },
    selectedNumber() {
      let count = 0;
      for (const key in this.items) {
        this.items[key].isExists && this.items[key].isShow && this.items[key].isSelected && count++;
      }
      return count;
    },
    selectAllChecked: {
      get() {
        for (const key in this.items) {
          if (this.items[key].isExists && this.items[key].isShow && !this.items[key].isSelected) {
            return false;
          }
        }
        return true;
      },
      set(value) {
        for (const key in this.items) {
          if (this.items[key].isExists && this.items[key].isShow) {
            if (value && !this.items[key].isSelected) {
              this.items[key].isSelected = true;
            } else if (!value && this.items[key].isSelected) {
              this.items[key].isSelected = false;
            }
          }
        }
      },
    },
  },
  watch: {
    inputValue(newValue, oldValue) {
      if (newValue != oldValue) {
        Note_Obj.fn.debounce(() => {
          this.searchEvent(newValue);
        }, 250);
      }
    },
    isInsert(newValue, oldValue) {
      if (newValue != oldValue && newValue) {
        if (Object.keys(this.originalItems).length > 50) {
          this.items = {};
          this.isWait = true;
          Note_Obj.fn.debounce(() => {
            this.restoreContentEvent();
          }, 50);
        } else {
          this.restoreContentEvent();
        }
      }
    },
    originalItems(_newValue, _oldValue) {
      if (this.isInsert) {
        this.isModify = false;
        this.searchEvent(this.inputValue);
      }
    },
  },
  methods: {
    searchEvent(value) {
      for (const key in this.items) {
        this.items[key].isShow = this.determineSearchString(value, this.items[key].value);
      }
    },
    restoreContentEvent(_event) {
      this.inputValue = '';
      this.isWait = false;
      this.isModify = false;
      this.items = Object.assign({}, this.originalItems);
      for (const key in this.items) {
        if (key === 'default') {
          this.items[key].value = this.lang.defaultGroupText;
        }
        if (this.items[key].primaryColor == null) {
          this.items[key].primaryColor = this.defaultColor.primaryColor;
        }
        if (this.items[key].secondaryColor == null) {
          this.items[key].secondaryColor = this.defaultColor.secondaryColor;
        }
        if (this.items[key].weight == null) {
          this.items[key].weight = 0;
        }
        this.items[key] = Object.assign({}, this.items[key], {
          isExists: true,
          isShow: true,
          isSelected: false,
          isContentEditAble: false,
        });
      }
    },
    itemInputEvent(key) {
      if (key !== 'default') {
        const inputValue = document.querySelector('.note-obj-group-frame-item-input-value[data-key="' + key + '"]').value.trim();
        this.items[key].value = inputValue;
        if (!this.items[key].value) {
          this.items[key].isExists = false;
        }
        this.isModify = true;
        this.items[key].isContentEditAble = false;
      }
    },
    deselectAllEvent(_event) {
      for (const key in this.items) {
        if (this.items[key].isExists && this.items[key].isSelected) {
          this.items[key].isSelected = false;
        }
      }
    },
    listItemEditEvent(key) {
      if (key !== 'default') {
        if (this.items[key].isContentEditAble) {
          this.itemInputEvent(key);
        } else {
          this.items[key].isContentEditAble = true;
          Note_Obj.fn.debounce(() => {
            try {
              const inputDom = document.querySelector('.note-obj-group-frame-item-input-value[data-key="' + key + '"]');
              if (inputDom) {
                inputDom.focus();
                inputDom.select();
              }
            } catch (e) {
              console.error('Error in focus command.', e);
            }
          }, 200);
        }
      }
    },
    listItemDeleteEvent(key) {
      if (key !== 'default') {
        this.items[key].isExists = false;
        this.isModify = true;
      }
    },
    listItemKeyUpEvent(event) {
      if (this.items[event.target.dataset.key].isContentEditAble) {
        if (event.keyCode === 13) {
          this.itemInputEvent(event.target.dataset.key);
        }
        if (event.keyCode === 27) {
          this.items[event.target.dataset.key].value = this.originalItems[event.target.dataset.key]
            ? this.originalItems[event.target.dataset.key].value
            : '';
          this.items[event.target.dataset.key].isContentEditAble = false;
        }
      }
    },
    deleteSelectedEvent(_evnet) {
      for (const key in this.items) {
        if (key !== 'default' && this.items[key].isExists && this.items[key].isShow && this.items[key].isSelected) {
          this.items[key].isExists = false;
          this.isModify = true;
        }
      }
    },
    exportSelectedEvent(_event) {
      if (!this.isModify) {
        const exportObj = {};
        for (const key in this.items) {
          if (this.items[key].isExists && this.items[key].isShow && this.items[key].isSelected) {
            exportObj[key] = this.originalItems[key];
          }
        }
        Object.keys(exportObj).length > 0 &&
          Note_Obj.fn.downloadText(JSON.stringify(exportObj), `${this.id}_group_${Date.now()}.txt`, () => {
            this.$emit('message-event', this.lang.exportNotifactionText.replace('%s', Object.keys(exportObj).length));
          });
      }
    },
    imoprtContentEvent(_event) {
      Note_Obj.fn.openFile((res, content) => {
        if (res) {
          if (content) {
            try {
              const importObj = JSON.parse(content);
              if (typeof importObj === 'object' && importObj) {
                for (const key in importObj) {
                  if (!importObj[key].value) {
                    delete importObj[key];
                  } else {
                    importObj[key] = Object.assign(
                      {
                        primaryColor: this.defaultColor.primaryColor,
                        secondaryColor: this.defaultColor.secondaryColor,
                        weight: 0,
                      },
                      importObj[key],
                      {
                        isExists: true,
                        isShow: true,
                        isSelected: false,
                        isContentEditAble: false,
                      }
                    );
                  }
                }
                if (Object.keys(importObj).length > 0) {
                  this.items = Object.assign({}, this.items, importObj);
                }
                this.searchEvent(this.inputValue);
                this.isModify = true;
                this.$emit('message-event', this.lang.importNotifactionText.replace('%s', Object.keys(importObj).length));
              } else {
                console.warn('Content is not an object.');
                this.$emit('message-event', this.lang.notObjectNotifactionText);
              }
            } catch (e) {
              console.error('There was an error in the parsing of the object.', e);
              this.$emit('message-event', this.lang.errorImportNotifactionText);
            }
          } else {
            console.warn('The contents of the file are empty.');
            this.$emit('message-event', this.lang.emptyFileNotifactionText);
          }
        } else {
          content === 'valid' && this.$emit('message-event', this.lang.incorrectFileSelectedNotifactionText);
        }
      });
    },
    saveContentEvent(_event) {
      if (this.isModify) {
        const saveObj = {};
        for (const key in this.items) {
          if (this.items[key].isExists) {
            saveObj[key] = {
              value: this.items[key].value,
              primaryColor: this.items[key].primaryColor || this.defaultColor.primaryColor,
              secondaryColor: this.items[key].secondaryColor || this.defaultColor.secondaryColor,
              weight: this.items[key].weight || 0,
            };
          }
        }
        this.$emit('save-event', saveObj);
      } else {
        this.$emit('quit-frame');
      }
    },
    cancelContentEvent(_event) {
      this.$emit('quit-frame');
    },
    createValueEvent() {
      this.$set(this.items, 'g_' + Date.now(), {
        value: this.lang.groupNewValueText,
        primaryColor: this.defaultColor.primaryColor,
        secondaryColor: this.defaultColor.secondaryColor,
        weight: 0,
        isExists: true,
        isShow: true,
        isSelected: false,
        isContentEditAble: true,
      });
      this.isModify = true;
      this.$nextTick(() => {
        const tbody = document.querySelector('.note-obj-group-frame-tbody');
        if (tbody) {
          tbody.scrollTop = tbody.scrollHeight;
        }
      });
    },
  },
});
Vue.component('note-obj-select-group-frame', {
  render(createElement) {
    const self = this;
    return createElement(
      'div',
      {
        attrs: {
          id: this.id + '_selectGroupFramePresentation',
        },
        class: 'note-obj-select-group-frame-presentation',
        style: {
          display: this.isShow ? '' : 'none',
        },
        on: {
          click: event => {
            if (event.target !== event.currentTarget) return;
            self.$emit('presentation-click');
          },
        },
      },
      [
        createElement(
          'div',
          {
            class: 'note-obj-select-group-frame-dialog',
          },
          [
            createElement(
              'div',
              {
                class: 'note-obj-select-group-frame-header',
              },
              [
                createElement('div', {
                  class: 'note-obj-select-group-frame-header-text',
                  domProps: {
                    textContent: this.lang.selectGroupHeaderText,
                  },
                }),
              ]
            ),
            createElement(
              'div',
              {
                class: 'note-obj-select-group-frame-content',
              },
              Object.keys(this.group)
                .sort((a, b) => {
                  if ((Number(this.group[a].weight) || 0) - (Number(this.group[b].weight) || 0) < 0) {
                    return 1;
                  } else if ((Number(this.group[a].weight) || 0) - (Number(this.group[b].weight) || 0) > 0) {
                    return -1;
                  }
                  return 0;
                })
                .map(key => {
                  const text = key === 'default' ? this.lang.defaultGroupText : this.group[key].value;
                  return createElement('div', {
                    key: key,
                    class: 'note-obj-select-group-frame-group-item',
                    attrs: {
                      'data-key': key,
                      title: text,
                    },
                    domProps: {
                      textContent: text,
                    },
                    style: {
                      color: this.group[key].secondaryColor,
                      backgroundColor: this.group[key].primaryColor,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.$emit('click-event', event.target.dataset.key);
                      },
                    },
                  });
                })
            ),
            createElement(
              'div',
              {
                class: 'note-obj-select-group-frame-footer',
              },
              [
                createElement('span', {
                  class: 'note-obj-select-group-frame-btn',
                  domProps: {
                    textContent: this.lang.cancelContentText,
                  },
                  on: {
                    click: event => {
                      event.stopPropagation();
                      self.$emit('quit-frame');
                    },
                  },
                }),
              ]
            ),
          ]
        ),
      ]
    );
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    lang: {
      type: Object,
      required: true,
    },
    isShow: {
      type: Boolean,
      required: true,
    },
    group: {
      type: Object,
      required: true,
    },
  },
});
Vue.component('note-obj-input-checkbox', {
  render(createElement) {
    const self = this;
    return createElement('input', {
      attrs: {
        type: 'checkbox',
        id: this.id,
      },
      domProps: {
        checked: self.isSelected,
      },
      on: {
        change: event => {
          self.$emit('checked-change', event.target.checked);
        },
      },
    });
  },
  props: {
    isSelected: {
      type: Boolean,
      required: true,
    },
    id: {
      type: String,
      default: '',
    },
  },
});
Vue.component('note-obj-management-input-text', {
  render(createElement) {
    const self = this;
    const className = this.className + (this.isContentEditAble ? ' note-obj-management-frame-item-input-edit' : '');
    return createElement('input', {
      attrs: {
        'data-key': this.dataKey,
        type: 'text',
        readonly: !this.isContentEditAble,
      },
      class: className,
      domProps: {
        value: self.value,
      },
      on: {
        keyup: event => {
          if (event.keyCode === 13 || event.keyCode === 27) {
            event.stopPropagation();
            event.preventDefault();
            self.$emit('item-key-up', event);
          }
        },
        keydown: event => {
          if (event.keyCode === 8) {
            if (!this.pause) {
              this.pause = 1;
              setTimeout(() => {
                this.pause = null;
              }, 0);
            } else {
              event.preventDefault();
            }
          }
        },
      },
    });
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    dataKey: {
      type: String,
      required: true,
    },
    isContentEditAble: {
      type: Boolean,
      required: true,
    },
    className: {
      type: String,
      required: true,
      default: 'note-obj-management-frame-item-input',
    },
  },
  data() {
    return {
      pause: null,
    };
  },
});
Vue.component('note-obj-management-group-item', {
  render(createElement) {
    const self = this;
    let text = '';
    let color = '';
    let backgroundColor = '';
    if (!this.groupValue || this.groupValue === 'default' || !this.groupSet[this.groupValue]) {
      text = this.text;
      color = this.groupSet['default'].secondaryColor;
      backgroundColor = this.groupSet['default'].primaryColor;
    } else {
      text = this.groupSet[this.groupValue].value;
      color = this.groupSet[this.groupValue].secondaryColor;
      backgroundColor = this.groupSet[this.groupValue].primaryColor;
    }
    return createElement('span', {
      class: 'note-obj-management-frame-group-item',
      attrs: {
        title: this.title,
        'data-key': this.dataKey,
      },
      domProps: {
        textContent: text,
      },
      style: {
        color: color,
        backgroundColor: backgroundColor,
      },
      on: {
        click: event => {
          event.stopPropagation();
          self.$emit('click-event', event.target.dataset.key);
        },
      },
    });
  },
  props: {
    groupValue: {
      type: String,
      required: true,
      default: '',
    },
    groupSet: {
      type: Object,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    dataKey: {
      type: String,
      required: true,
    },
  },
});
Vue.component('note-obj-new-group-frame', {
  render(createElement) {
    const self = this;
    return createElement(
      'div',
      {
        attrs: {
          id: this.id + '_newGroupPresentation',
        },
        class: 'note-obj-new-group-frame-presentation',
        style: {
          display: this.isShow ? '' : 'none',
        },
        on: {
          click: event => {
            if (event.target !== event.currentTarget) return;
            self.$emit('presentation-click');
          },
        },
      },
      [
        createElement(
          'div',
          {
            class: 'note-obj-new-group-frame-dialog',
          },
          [
            createElement(
              'div',
              {
                class: 'note-obj-new-group-frame-header',
              },
              [
                createElement('span', {
                  class: 'note-obj-new-group-frame-title-text',
                  domProps: {
                    textContent: this.lang.groupCreateValueText,
                  },
                }),
              ]
            ),
            createElement('input', {
              attrs: {
                id: this.id + '_newGroupFrameInputBox',
                type: 'text',
                placeholder: this.lang.groupPlaceholder,
              },
              class: 'note-obj-new-group-frame-input',
              domProps: {
                value: self.inputValue,
              },
              on: {
                change: event => {
                  self.inputValue = event.target.value.trim();
                },
                keyup: event => {
                  if (event.keyCode === 13 || event.keyCode === 27) {
                    event.preventDefault();
                    self.keyUpEvent(event);
                  }
                },
              },
            }),
            createElement(
              'div',
              {
                class: 'note-obj-new-group-frame-color-label',
              },
              [
                createElement('span', {
                  class: 'note-obj-new-group-frame-color-label-text',
                  domProps: {
                    textContent: this.lang.groupPrimaryColorText + ': ',
                  },
                }),
                createElement('input', {
                  attrs: {
                    type: 'color',
                  },
                  domProps: {
                    value: this.primaryColor,
                  },
                  on: {
                    change: event => {
                      self.primaryColor = event.target.value;
                    },
                  },
                }),
              ]
            ),
            createElement(
              'div',
              {
                class: 'note-obj-new-group-frame-color-label',
              },
              [
                createElement('span', {
                  class: 'note-obj-new-group-frame-color-label-text',
                  domProps: {
                    textContent: this.lang.groupSecondaryColorText + ': ',
                  },
                }),
                createElement('input', {
                  attrs: {
                    type: 'color',
                  },
                  domProps: {
                    value: this.secondaryColor,
                  },
                  on: {
                    change: event => {
                      self.secondaryColor = event.target.value;
                    },
                  },
                }),
              ]
            ),
            createElement(
              'div',
              {
                class: 'note-obj-new-group-frame-color-label',
              },
              [
                createElement('span', {
                  class: 'note-obj-new-group-frame-color-label-text',
                  domProps: {
                    textContent: this.lang.groupWeightText + ': ',
                  },
                }),
                createElement('input', {
                  attrs: {
                    type: 'number',
                    step: 1,
                    min: -100,
                    max: 100,
                  },
                  domProps: {
                    value: this.weight,
                  },
                  on: {
                    change: event => {
                      self.weight = event.target.value;
                    },
                  },
                }),
              ]
            ),
            createElement('button', {
              attrs: {
                type: 'button',
                title: this.lang.saveTagTitle,
              },
              domProps: {
                textContent: this.lang.saveTagText,
              },
              on: {
                click: event => {
                  event.stopPropagation();
                  self.saveEvent();
                },
              },
            }),
            createElement('button', {
              attrs: {
                type: 'button',
                title: this.lang.cancelTagTitle,
              },
              class: 'note-obj-new-group-frame-button-bottom',
              domProps: {
                textContent: this.lang.cancelTagText,
              },
              on: {
                click: event => {
                  event.stopPropagation();
                  self.$emit('quit-event');
                },
              },
            }),
          ]
        ),
      ]
    );
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    lang: {
      type: Object,
      required: true,
    },
    isShow: {
      type: Boolean,
      required: true,
    },
    defaultColor: {
      type: Object,
      required: true,
    },
    userId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      groupKey: 'g_' + Date.now(),
      inputValue: this.lang.groupNewValueText,
      primaryColor: this.defaultColor.primaryColor,
      secondaryColor: this.defaultColor.secondaryColor,
      weight: 0,
    };
  },
  watch: {
    isShow(newValue, oldValue) {
      if (newValue !== oldValue && newValue) {
        this.groupKey = 'g_' + Date.now();
        this.inputValue = this.lang.groupNewValueText;
        this.primaryColor = this.defaultColor.primaryColor;
        this.secondaryColor = this.defaultColor.secondaryColor;
        (this.weight = 0),
          Note_Obj.fn.debounce(() => {
            try {
              if (newValue) {
                const ele = document.getElementById(this.id + '_newGroupFrameInputBox');
                ele && ele.focus() && ele.select();
              }
            } catch (e) {
              console.error('Error in focus command.', e);
            }
          }, 200);
      }
    },
  },
  methods: {
    keyUpEvent(event) {
      if (event.keyCode === 13) {
        this.saveEvent();
      }
      if (event.keyCode === 27) {
        this.$emit('quit-event');
      }
    },
    saveEvent() {
      this.$emit('save-event', this.groupKey, this.inputValue, this.primaryColor, this.secondaryColor, this.weight, this.userId);
    },
  },
});
Vue.component('note-obj-settings-frame', {
  render(createElement) {
    const self = this;
    return createElement(
      'transition',
      {
        props: {
          name: 'note-obj-settings-frame-card',
        },
      },
      [
        this.isInsert
          ? createElement(
              'div',
              {
                attrs: {
                  id: this.id + '_settingsFramePresentation',
                },
                class: 'note-obj-settings-frame-presentation',
                on: {
                  click: event => {
                    if (event.target !== event.currentTarget) return;
                    self.$emit('quit-frame');
                  },
                },
              },
              [
                createElement(
                  'div',
                  {
                    class: 'note-obj-settings-frame-card',
                  },
                  [
                    createElement(
                      'header',
                      {
                        class: 'note-obj-settings-frame-header',
                      },
                      [
                        createElement('span', {
                          class: 'note-obj-settings-frame-headline',
                          domProps: {
                            textContent: this.lang.settingsHeadlineText,
                          },
                        }),
                        createElement('span', {
                          attrs: {
                            title: this.lang.settingsCloseTitle,
                          },
                          class: 'note-obj-settings-frame-close-btn',
                          on: {
                            click: event => {
                              event.stopPropagation();
                              self.$emit('quit-frame');
                            },
                          },
                        }),
                      ]
                    ),
                    createElement(
                      'div',
                      {
                        class: 'note-obj-settings-frame-body',
                      },
                      [
                        createElement(
                          'div',
                          {
                            class: 'note-obj-settings-frame-flod',
                          },
                          [
                            createElement('note-obj-settings-frame-flod-header', {
                              on: {
                                'header-click': () => {
                                  self.headers.searchBox = !self.headers.searchBox;
                                },
                              },
                              props: {
                                aboutText: this.lang.settingsAboutSearchBoxText,
                                iconRomote: this.headers.searchBox,
                              },
                            }),
                            createElement(
                              'div',
                              {
                                class: 'note-obj-settings-frame-content',
                                style: {
                                  display: this.headers.searchBox ? '' : 'none',
                                },
                              },
                              Object.keys(this.items.searchBox).map(key => {
                                if (
                                  [
                                    'showIndex',
                                    'canHideSearchFrame',
                                    'showButton',
                                    'showGroupName',
                                    'openNewTab',
                                    'enableShortcutKeys',
                                  ].includes(key)
                                ) {
                                  return createElement('note-obj-settings-item', {
                                    key: key,
                                    props: {
                                      id: this.sections[key].id,
                                      value: this.items.searchBox[key],
                                      type: this.sections[key].type,
                                      label: this.sections[key].label,
                                    },
                                    on: {
                                      'value-change': (newValue, _oldValue) => {
                                        self.items.searchBox[key] = newValue;
                                      },
                                    },
                                  });
                                } else {
                                  return null;
                                }
                              })
                            ),
                          ]
                        ),
                        createElement(
                          'div',
                          {
                            class: 'note-obj-settings-frame-flod',
                          },
                          [
                            createElement('note-obj-settings-frame-flod-header', {
                              on: {
                                'header-click': () => {
                                  self.headers.searchValue = !self.headers.searchValue;
                                },
                              },
                              props: {
                                aboutText: this.lang.settingsAboutSearchValueText,
                                iconRomote: this.headers.searchValue,
                              },
                            }),
                            createElement(
                              'div',
                              {
                                class: 'note-obj-settings-frame-content',
                                style: {
                                  display: this.headers.searchValue ? '' : 'none',
                                },
                              },
                              Object.keys(this.items.searchValue).map(key => {
                                if (['caseSensitive', 'split', 'regular'].includes(key)) {
                                  return createElement('note-obj-settings-item', {
                                    key: key,
                                    props: {
                                      id: this.sections[key].id,
                                      value: this.items.searchValue[key],
                                      type: this.sections[key].type,
                                      label: this.sections[key].label,
                                    },
                                    on: {
                                      'value-change': (newValue, _oldValue) => {
                                        self.items.searchValue[key] = newValue;
                                      },
                                    },
                                  });
                                } else {
                                  return null;
                                }
                              })
                            ),
                          ]
                        ),
                        createElement(
                          'div',
                          {
                            class: 'note-obj-settings-frame-flod',
                          },
                          [
                            createElement('note-obj-settings-frame-flod-header', {
                              on: {
                                'header-click': () => {
                                  self.headers.addNote = !self.headers.addNote;
                                },
                              },
                              props: {
                                aboutText: this.lang.settingsAboutAddNoteText,
                                iconRomote: this.headers.addNote,
                              },
                            }),
                            createElement(
                              'div',
                              {
                                class: 'note-obj-settings-frame-content',
                                style: {
                                  display: this.headers.addNote ? '' : 'none',
                                },
                              },
                              [
                                createElement('note-obj-settings-item', {
                                  props: {
                                    id: this.sections.showNoteGroupName.id,
                                    value: this.items.addNote.showNoteGroupName,
                                    type: this.sections.showNoteGroupName.type,
                                    label: this.sections.showNoteGroupName.label,
                                  },
                                  on: {
                                    'value-change': (newValue, _oldValue) => {
                                      self.items.addNote.showNoteGroupName = newValue;
                                    },
                                  },
                                }),
                                createElement('note-obj-settings-item', {
                                  props: {
                                    id: this.sections.hideNoteText.id,
                                    value: this.items.addNote.hideNoteText,
                                    type: this.sections.hideNoteText.type,
                                    label: this.sections.hideNoteText.label,
                                  },
                                  on: {
                                    'value-change': (newValue, _oldValue) => {
                                      self.items.addNote.hideNoteText = newValue;
                                    },
                                  },
                                }),
                                createElement('note-obj-settings-item', {
                                  props: {
                                    id: this.sections.showNoteGroupColor.id,
                                    value: this.items.addNote.showNoteGroupColor,
                                    type: this.sections.showNoteGroupColor.type,
                                    label: this.sections.showNoteGroupColor.label,
                                  },
                                  on: {
                                    'value-change': (newValue, _oldValue) => {
                                      self.items.addNote.showNoteGroupColor = newValue;
                                    },
                                  },
                                }),
                                createElement('note-obj-settings-item', {
                                  props: {
                                    id: this.sections.showPopoverFrame.id,
                                    value: this.items.addNote.showPopoverFrame,
                                    type: this.sections.showPopoverFrame.type,
                                    label: this.sections.showPopoverFrame.label,
                                  },
                                  on: {
                                    'value-change': (newValue, _oldValue) => {
                                      self.items.addNote.showPopoverFrame = newValue;
                                    },
                                  },
                                }),
                                createElement('note-obj-settings-item', {
                                  props: {
                                    id: this.sections.openNoteNewTab.id,
                                    value: this.items.addNote.openNoteNewTab,
                                    type: this.sections.openNoteNewTab.type,
                                    label: this.sections.openNoteNewTab.label,
                                  },
                                  on: {
                                    'value-change': (newValue, _oldValue) => {
                                      self.items.addNote.openNoteNewTab = newValue;
                                    },
                                  },
                                }),
                                createElement('note-obj-settings-item', {
                                  props: {
                                    id: this.sections.canHideAddFrame.id,
                                    value: this.items.addNote.canHideAddFrame,
                                    type: this.sections.canHideAddFrame.type,
                                    label: this.sections.canHideAddFrame.label,
                                  },
                                  on: {
                                    'value-change': (newValue, _oldValue) => {
                                      self.items.addNote.canHideAddFrame = newValue;
                                    },
                                  },
                                }),
                              ].concat(
                                Object.keys(this.items.addNote.fix).map(key => {
                                  return createElement('note-obj-settings-item', {
                                    key: key,
                                    props: {
                                      id: `${this.id}_settingsFrameAddNoteFix_${key}`,
                                      value: this.items.addNote.fix[key].value,
                                      type: 'text',
                                      label: this.lang.settingsAddNoteCommonContentText,
                                      child: [
                                        createElement('note-obj-settings-item', {
                                          key: key,
                                          props: {
                                            isChild: true,
                                            id: `${this.id}_settingsFrameAddNotefix_${key}`,
                                            value: this.items.addNote.fix[key].type,
                                            type: 'radio',
                                            options: {
                                              pre: {
                                                text: this.lang.settingsAddNotePrefixText,
                                              },
                                              suf: {
                                                text: this.lang.settingsAddNoteSuffixText,
                                              },
                                            },
                                          },
                                          on: {
                                            'value-change': (newValue, _oldValue) => {
                                              self.items.addNote.fix[key].type = newValue;
                                            },
                                          },
                                        }),
                                      ],
                                    },
                                    on: {
                                      'value-change': (newValue, _oldValue) => {
                                        self.items.addNote.fix[key].value = newValue;
                                      },
                                    },
                                  });
                                })
                              )
                            ),
                          ]
                        ),
                        createElement(
                          'div',
                          {
                            class: 'note-obj-settings-frame-flod',
                          },
                          [
                            createElement('note-obj-settings-frame-flod-header', {
                              props: {
                                aboutText: this.lang.settingsAboutInterfaceText,
                                iconRomote: this.headers.interface,
                              },
                              on: {
                                'header-click': () => {
                                  self.headers.interface = !self.headers.interface;
                                },
                              },
                            }),
                            createElement(
                              'div',
                              {
                                class: 'note-obj-settings-frame-content',
                                style: {
                                  display: this.headers.interface ? '' : 'none',
                                },
                              },
                              [
                                createElement('note-obj-settings-item', {
                                  props: {
                                    id: this.sections.insertSearchButton.id,
                                    label: this.sections.insertSearchButton.label,
                                    type: this.sections.insertSearchButton.type,
                                    value: this.items.interface.insertSearchButton,
                                  },
                                  on: {
                                    'value-change': (newValue, _oldValue) => {
                                      self.items.interface.insertSearchButton = newValue;
                                    },
                                  },
                                }),
                                createElement('note-obj-settings-item', {
                                  props: {
                                    id: this.sections.insertSettingsButton.id,
                                    label: this.sections.insertSettingsButton.label,
                                    type: this.sections.insertSettingsButton.type,
                                    value: this.items.interface.insertSettingsButton,
                                  },
                                  on: {
                                    'value-change': (newValue, _oldValue) => {
                                      self.items.interface.insertSettingsButton = newValue;
                                    },
                                  },
                                }),
                                createElement('note-obj-settings-item', {
                                  props: {
                                    id: this.sections.insertNoteManagementButton.id,
                                    label: this.sections.insertNoteManagementButton.label,
                                    type: this.sections.insertNoteManagementButton.type,
                                    value: this.items.interface.insertNoteManagementButton,
                                  },
                                  on: {
                                    'value-change': (newValue, _oldValue) => {
                                      self.items.interface.insertNoteManagementButton = newValue;
                                    },
                                  },
                                }),
                                createElement('note-obj-settings-item', {
                                  props: {
                                    id: this.sections.insertGroupManagementButton.id,
                                    label: this.sections.insertGroupManagementButton.label,
                                    type: this.sections.insertGroupManagementButton.type,
                                    value: this.items.interface.insertGroupManagementButton,
                                  },
                                  on: {
                                    'value-change': (newValue, _oldValue) => {
                                      self.items.interface.insertGroupManagementButton = newValue;
                                    },
                                  },
                                }),
                                createElement('note-obj-settings-item', {
                                  props: {
                                    id: this.id + '_settingsFrameInterfaceMode',
                                    value: this.items.interface.mode,
                                    type: 'radio',
                                    options: {
                                      bright: {
                                        text: this.lang.settingsInterfaceBrightText,
                                      },
                                      dark: {
                                        text: this.lang.settingsInterfaceDarkText,
                                      },
                                    },
                                    label: this.lang.settingsInterfaceConfigText,
                                  },
                                  on: {
                                    'value-change': (newValue, _oldValue) => {
                                      self.items.interface.mode = newValue;
                                    },
                                  },
                                }),
                                createElement('note-obj-settings-item', {
                                  props: {
                                    id: this.id + '_settingsFrameInterfaceLanguage',
                                    value: this.items.interface.language,
                                    type: 'select',
                                    label: this.lang.settingsInterfaceLanguageText,
                                    default: this.lang.settingsInterfaceSelectLanguageText,
                                    options: {
                                      en: {
                                        text: 'English (en)',
                                      },
                                      fr: {
                                        text: 'Fran??ais (fr)',
                                      },
                                      ja: {
                                        text: '????????? (ja)',
                                      },
                                      ko: {
                                        text: '????????? (ko)',
                                      },
                                      zh_cn: {
                                        text: '???????????? (zh-CN)',
                                      },
                                      zh_tw: {
                                        text: '???????????? (zh-TW)',
                                      },
                                    },
                                  },
                                  on: {
                                    'value-change': (newValue, _oldValue) => {
                                      self.items.interface.language = newValue;
                                    },
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                        this.otherExist
                          ? createElement(
                              'div',
                              {
                                class: 'note-obj-settings-frame-flod',
                              },
                              [
                                createElement('note-obj-settings-frame-flod-header', {
                                  props: {
                                    aboutText: this.lang.settingsAboutOtherText,
                                    iconRomote: this.headers.other,
                                  },
                                  on: {
                                    'header-click': () => {
                                      self.headers.other = !self.headers.other;
                                    },
                                  },
                                }),
                                createElement(
                                  'div',
                                  {
                                    class: 'note-obj-settings-frame-content',
                                    style: {
                                      display: this.headers.other ? '' : 'none',
                                    },
                                  },
                                  Object.keys(this.items.other).map(key => {
                                    return createElement('note-obj-settings-item', {
                                      key: key,
                                      props: {
                                        id: `${this.id}_otherSettings_${key}`,
                                        value: this.items.other[key],
                                        type: this.otherSettingsInfo[key].type,
                                        label: this.otherSettingsInfo[key].label,
                                        options: this.otherSettingsInfo[key].options,
                                      },
                                      on: {
                                        'value-change': (newValue, oldValue) => {
                                          self.items.other[key] = newValue;
                                          self.otherSettingsInfo[key].event(newValue, oldValue);
                                        },
                                      },
                                    });
                                  })
                                ),
                              ]
                            )
                          : null,
                        createElement(
                          'div',
                          {
                            class: 'note-obj-settings-frame-flod',
                          },
                          [
                            createElement('note-obj-settings-frame-flod-header', {
                              props: {
                                aboutText: this.lang.settingsAboutStoredDataText,
                                iconRomote: this.headers.storedData,
                              },
                              on: {
                                'header-click': () => {
                                  self.headers.storedData = !self.headers.storedData;
                                },
                              },
                            }),
                            createElement(
                              'div',
                              {
                                class: 'note-obj-settings-frame-content',
                                style: {
                                  display: this.headers.storedData ? '' : 'none',
                                },
                              },
                              [
                                createElement('note-obj-settings-item', {
                                  props: {
                                    id: this.id + 'settingsFrameInterfaceAutoSync',
                                    value: this.items.interface.autoSync,
                                    label:
                                      this.lang.settingsFrameInterfaceAutoSyncText +
                                      (Note_Obj.GM.hasAddValueChangeListenerMethods()
                                        ? ''
                                        : ' (' + this.lang.settingsFrameInterfaceNotSupportOptionText + ')'),
                                    type: 'checkbox',
                                  },
                                  on: {
                                    'value-change': (newValue, _oldValue) => {
                                      this.items.interface.autoSync = newValue;
                                    },
                                  },
                                }),
                                createElement(
                                  'div',
                                  {
                                    class: 'note-obj-settings-frame-content-section',
                                  },
                                  [
                                    createElement('span', {
                                      domProps: {
                                        textContent:
                                          this.lang.settingsStoredDataLastTimeText + '(Unix: ' + this.storeModificationTime + ')',
                                      },
                                    }),
                                  ]
                                ),
                                createElement(
                                  'div',
                                  {
                                    class: 'note-obj-settings-frame-content-section',
                                  },
                                  [
                                    createElement('span', {
                                      domProps: {
                                        textContent: this.storeModificationTimeText,
                                      },
                                    }),
                                  ]
                                ),
                                createElement(
                                  'div',
                                  {
                                    class: 'note-obj-settings-frame-content-section',
                                  },
                                  [
                                    createElement('button', {
                                      attrs: {
                                        type: 'button',
                                        title: this.lang.settingsStoredDataExportTitle,
                                      },
                                      domProps: {
                                        textContent: this.lang.gmExportText,
                                      },
                                      on: {
                                        click: event => {
                                          event.stopPropagation();
                                          self.$emit('export-store-click');
                                        },
                                      },
                                    }),
                                    createElement('button', {
                                      attrs: {
                                        type: 'button',
                                        title: this.lang.settingsStoredDataImportIitle,
                                      },
                                      domProps: {
                                        textContent: this.lang.gmImportText,
                                      },
                                      on: {
                                        click: event => {
                                          event.stopPropagation();
                                          self.$emit('import-store-click');
                                        },
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                        createElement(
                          'div',
                          {
                            class: 'note-obj-settings-frame-flod',
                          },
                          [
                            createElement('note-obj-settings-frame-flod-header', {
                              props: {
                                aboutText: this.lang.settingsAboutScriptText,
                                iconRomote: this.headers.script,
                              },
                              on: {
                                'header-click': () => {
                                  self.headers.script = !self.headers.script;
                                },
                              },
                            }),
                            createElement(
                              'div',
                              {
                                class: 'note-obj-settings-frame-content',
                                style: {
                                  display: this.headers.script ? '' : 'none',
                                },
                              },
                              [
                                createElement('note-obj-settings-frame-script-item', {
                                  props: {
                                    type: 'a',
                                    scriptText: this.lang.settingsScriptAuthorText,
                                    text: this.script.author.name,
                                    href: this.script.author.homepage,
                                  },
                                }),
                                createElement('note-obj-settings-frame-script-item', {
                                  props: {
                                    type: 'a',
                                    scriptText: this.lang.settingsScriptVersionText,
                                    text: Note_Obj.GM.info().script.version,
                                    href: this.script.address,
                                  },
                                }),
                                createElement('note-obj-settings-frame-script-item', {
                                  props: {
                                    type: 'p',
                                    scriptText: this.lang.settingsScriptUpdatedText,
                                    text: this.script.updated,
                                  },
                                }),
                                createElement('note-obj-settings-frame-script-item', {
                                  props: {
                                    type: 'a',
                                    scriptText: this.lang.settingsScriptCoreText,
                                    text: this.script.core.name,
                                    href: this.script.core.url,
                                  },
                                }),
                              ]
                                .concat(
                                  this.script.library.map(item => {
                                    return createElement('note-obj-settings-frame-script-item', {
                                      props: {
                                        type: 'a',
                                        scriptText: this.lang.settingsScriptLibraryText,
                                        text: item.name + ' (' + item.version + ')',
                                        href: item.url,
                                      },
                                    });
                                  })
                                )
                                .concat([
                                  createElement('note-obj-settings-frame-script-item', {
                                    props: {
                                      type: 'p',
                                      scriptText: this.lang.settingsScriptHandlerText,
                                      text: Note_Obj.GM.info().scriptHandler + ' (' + Note_Obj.GM.info().version + ')',
                                    },
                                  }),
                                  createElement('note-obj-settings-frame-script-item', {
                                    props: {
                                      type: 'p',
                                      scriptText: this.lang.settingsScriptLanguageText,
                                      text: this.lang.settingsScriptLanguageAuthorText,
                                    },
                                  }),
                                  createElement(
                                    'div',
                                    {
                                      class: 'note-obj-settings-frame-content-section',
                                    },
                                    [
                                      createElement('span', {
                                        class: 'note-obj-settings-frame-language-help-text',
                                        attrs: {
                                          title: this.lang.settingsScriptLanguageHelpTitle,
                                        },
                                        domProps: {
                                          textContent: this.lang.settingsScriptLanguageHelpText,
                                        },
                                        on: {
                                          click: event => {
                                            event.stopPropagation();
                                            self.$emit('help-translate-click');
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                ])
                            ),
                          ]
                        ),
                      ]
                    ),
                    createElement(
                      'div',
                      {
                        class: 'note-obj-settings-frame-footer',
                      },
                      [
                        createElement('button', {
                          attrs: {
                            type: 'button',
                            title: this.lang.settingsExportTitle,
                          },
                          domProps: {
                            textContent: this.lang.settingsExportText,
                          },
                          on: {
                            click: event => {
                              event.stopPropagation();
                              self.$emit('export-click');
                            },
                          },
                        }),
                        createElement('button', {
                          attrs: {
                            type: 'button',
                            title: this.lang.settingsImportTitle,
                          },
                          domProps: {
                            textContent: this.lang.settingsImportText,
                          },
                          on: {
                            click: event => {
                              event.stopPropagation();
                              self.$emit('import-click');
                            },
                          },
                        }),
                        createElement('span', {
                          attrs: {
                            title: this.lang.settingsSaveTitle,
                          },
                          class: 'note-obj-settings-frame-footer-save-btn',
                          domProps: {
                            textContent: this.lang.settingsSaveText,
                          },
                          on: {
                            click: event => {
                              event.stopPropagation();
                              self.$emit('save-click');
                            },
                          },
                        }),
                        createElement('span', {
                          attrs: {
                            title: this.lang.settingsCancelTitle,
                          },
                          class: 'note-obj-settings-frame-footer-cancel-btn',
                          domProps: {
                            textContent: this.lang.settingsCancelText,
                          },
                          on: {
                            click: event => {
                              event.stopPropagation();
                              self.$emit('quit-frame');
                            },
                          },
                        }),
                      ]
                    ),
                  ]
                ),
              ]
            )
          : null,
      ]
    );
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    lang: {
      type: Object,
      required: true,
    },
    isInsert: {
      type: Boolean,
      required: true,
    },
    items: {
      type: Object,
      required: true,
    },
    otherSettingsInfo: {
      type: Object,
      required: true,
    },
    script: {
      type: Object,
      required: true,
    },
    storeModificationTime: {
      type: [String, Number],
      requried: true,
    },
  },
  data() {
    return {
      headers: {
        searchBox: false,
        searchValue: false,
        addNote: false,
        interface: false,
        other: false,
        script: false,
        storedData: false,
      },
      sections: {
        showIndex: {
          id: this.id + '_settingsFrameSearchBoxShowIndex',
          label: this.lang.settingsSearchBoxShowIndexText,
          type: 'checkbox',
        },
        canHideSearchFrame: {
          id: this.id + '_settingsFrameCanHideSearchFrame',
          label: this.lang.settingsSearchBoxCanHideSearchFrameText,
          type: 'checkbox',
        },
        showButton: {
          id: this.id + '_settingsFrameSearchBoxShowButton',
          label: this.lang.settingsSearchBoxShowButtonText,
          type: 'checkbox',
        },
        showGroupName: {
          id: this.id + '_settingsFrameSearchBoxShowGroupName',
          label: this.lang.settingsSearchBoxShowGroupNameText,
          type: 'checkbox',
        },
        openNewTab: {
          id: this.id + '_settingsFrameSearchBoxOpenNewTab',
          label: this.lang.settingsSearchBoxOpenNewTabText,
          type: 'checkbox',
        },
        enableShortcutKeys: {
          id: this.id + '_settingsFrameSearchBoxEnableShortcutKeys',
          label: this.lang.settingsSearchBoxEnableShortcutKeysText,
          type: 'checkbox',
        },
        caseSensitive: {
          id: this.id + '_settingsFrameSearchValueCaseSensitive',
          label: this.lang.settingsSearchValueCaseSensitiveText,
          type: 'checkbox',
        },
        split: {
          id: this.id + '_settingsFrameSearchValueSplit',
          label: this.lang.settingsSearchValueSplitText,
          type: 'checkbox',
        },
        regular: {
          id: this.id + '_settingsFrameSearchValueRegular',
          label: this.lang.settingsSearchValueRegularText,
          type: 'checkbox',
        },
        showNoteGroupName: {
          id: this.id + '_settingsFrameAddNoteShowNoteGroupName',
          label: this.lang.settingsAddNoteShowNoteGroupNameText,
          type: 'checkbox',
        },
        hideNoteText: {
          id: this.id + '_settingsFrameAddNoteHideNoteText',
          label: this.lang.settingsAddNoteHideNoteText,
          type: 'checkbox',
        },
        showNoteGroupColor: {
          id: this.id + '_settingsFrameAddNoteShowNoteGroupColor',
          label: this.lang.settingsAddNoteShowNoteGroupColorText,
          type: 'checkbox',
        },
        showPopoverFrame: {
          id: this.id + '_setttingsFrameAddNoteShowPopoverFrame',
          label: this.lang.settingsAddNoteShowPopoverFrameText,
          type: 'checkbox',
        },
        openNoteNewTab: {
          id: this.id + '_settingsFrameAddNoteOpenNoteNewTab',
          label: this.lang.settingsAddNoteOpenNoteNewTabText,
          type: 'checkbox',
        },
        canHideAddFrame: {
          id: this.id + '_settingsFrameAddNoteCanHideAddFrame',
          label: this.lang.settingsAddNoteCanHideAddFrameText,
          type: 'checkbox',
        },
        insertSearchButton: {
          id: this.id + '_settingsFrameInterfaceInsertSearchButton',
          label: this.lang.settingsInterfaceInsertSearchButtonText,
          type: 'checkbox',
        },
        insertSettingsButton: {
          id: this.id + '_settingsFrameInterfaceInsertSettingsButton',
          label: this.lang.settingsInterfaceInsertSettingsButtonText,
          type: 'checkbox',
        },
        insertNoteManagementButton: {
          id: this.id + '_settingsFrameInterfaceInsertNoteManagementButton',
          label: this.lang.settingsInterfaceInsertNoteManagementButtonText,
          type: 'checkbox',
        },
        insertGroupManagementButton: {
          id: this.id + '_settingsFrameInterfaceInsertGroupManagementButton',
          label: this.lang.settingsInterfaceInsertGroupManagementButtonText,
          type: 'checkbox',
        },
      },
    };
  },
  computed: {
    otherExist() {
      return Object.keys(this.items.other).length > 0;
    },
    storeModificationTimeText() {
      return this.storeModificationTime ? new Date(Number(this.storeModificationTime)) : '';
    },
  },
  watch: {
    lang(_newValue, _oldValue) {
      this.sections.showIndex.label = this.lang.settingsSearchBoxShowIndexText;
      this.sections.canHideSearchFrame.label = this.lang.settingsSearchBoxCanHideSearchFrameText;
      this.sections.showButton.label = this.lang.settingsSearchBoxShowButtonText;
      this.sections.showGroupName.label = this.lang.settingsSearchBoxShowGroupNameText;
      this.sections.openNewTab.label = this.lang.settingsSearchBoxOpenNewTabText;
      this.sections.enableShortcutKeys.label = this.lang.settingsSearchBoxEnableShortcutKeysText;
      this.sections.caseSensitive.label = this.lang.settingsSearchValueCaseSensitiveText;
      this.sections.split.label = this.lang.settingsSearchValueSplitText;
      this.sections.regular.label = this.lang.settingsSearchValueRegularText;
      this.sections.showNoteGroupName.label = this.lang.settingsAddNoteShowNoteGroupNameText;
      this.sections.hideNoteText.label = this.lang.settingsAddNoteHideNoteText;
      this.sections.showNoteGroupColor.label = this.lang.settingsAddNoteShowNoteGroupColorText;
      this.sections.showPopoverFrame.label = this.lang.settingsAddNoteShowPopoverFrameText;
      (this.sections.openNoteNewTab.label = this.lang.settingsAddNoteOpenNoteNewTabText),
        (this.sections.canHideAddFrame.label = this.lang.settingsAddNoteCanHideAddFrameText);
      this.sections.insertSearchButton.label = this.lang.settingsInterfaceInsertSearchButtonText;
      this.sections.insertSettingsButton.label = this.lang.settingsInterfaceInsertSettingsButtonText;
      this.sections.insertNoteManagementButton.label = this.lang.settingsInterfaceInsertNoteManagementButtonText;
      this.sections.insertGroupManagementButton.label = this.lang.settingsInterfaceInsertGroupManagementButtonText;
    },
  },
});
Vue.component('note-obj-settings-frame-flod-header', {
  render(createElement) {
    const self = this;
    return createElement(
      'header',
      {
        on: {
          click: event => {
            event.stopPropagation();
            self.$emit('header-click');
          },
        },
      },
      [
        createElement('span', {
          domProps: {
            textContent: this.aboutText,
          },
        }),
        createElement('i', {
          class: {
            'note-obj-settings-frame-header-icon': true,
            'note-obj-settings-frame-header-icon-romote': this.iconRomote,
          },
        }),
      ]
    );
  },
  props: {
    aboutText: {
      type: String,
      required: true,
    },
    iconRomote: {
      type: Boolean,
      required: true,
    },
  },
});
Vue.component('note-obj-settings-item', {
  render(createElement) {
    const self = this;
    let childVNode =
      this.type === 'checkbox'
        ? [
            createElement('note-obj-settings-input-checkbox', {
              props: {
                id: this.id,
                isSelected: this.value,
                label: this.label,
              },
              on: {
                'checked-change': value => {
                  self.$emit('value-change', value, self.oldValue);
                  self.oldValue = value;
                },
              },
            }),
          ]
        : this.type === 'text'
        ? [
            createElement('note-obj-settings-input-text', {
              props: {
                id: this.id,
                value: this.value,
                label: this.label,
              },
              on: {
                'content-change': value => {
                  self.$emit('value-change', value, self.oldValue);
                  self.oldValue = value;
                },
              },
            }),
          ]
        : this.type === 'radio'
        ? [
            self.label
              ? createElement('span', {
                  class: 'note-obj-settings-frame-radio-config-text',
                  domProps: {
                    textContent: self.label,
                  },
                })
              : null,
          ].concat(
            Object.keys(self.options).map(key => {
              return createElement('note-obj-settings-input-radio', {
                props: {
                  id: `${this.id}_${key}`,
                  value: key,
                  checkedValue: self.value === key,
                  label: self.options[key].text,
                },
                on: {
                  'checked-change': value => {
                    self.$emit('value-change', value, self.oldValue);
                    self.oldValue = value;
                  },
                },
              });
            })
          )
        : this.type === 'select'
        ? [
            createElement('note-obj-settings-select', {
              props: {
                id: this.id,
                label: this.label,
                default: this.default,
                options: this.options,
              },
              on: {
                'value-change': value => {
                  self.$emit('value-change', value, self.oldValue);
                  self.oldValue = value;
                },
              },
            }),
          ]
        : null;
    if (childVNode && this.child.length > 0) {
      childVNode = childVNode.concat(this.child);
    }
    return createElement(
      'div',
      {
        class: {
          'note-obj-settings-frame-content-section': !this.isChild,
          'note-obj-settings-frame-content-child-section': this.isChild,
        },
      },
      childVNode
    );
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Boolean],
      required: true,
    },
    type: {
      type: String,
      default: 'checkbox',
      validator(value) {
        return ['checkbox', 'text', 'radio', 'select'].indexOf(value) !== -1;
      },
    },
    label: {
      type: String,
    },
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    default: {
      type: String,
      default: '',
    },
    child: {
      type: Array,
      default() {
        return [];
      },
    },
    isChild: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      oldValue: this.value,
    };
  },
});
Vue.component('note-obj-settings-input-checkbox', {
  render(createElement) {
    const self = this;
    return createElement(
      'div',
      {
        class: 'note-obj-settings-frame-component-package',
      },
      [
        createElement('note-obj-input-checkbox', {
          props: {
            isSelected: this.isSelected,
            id: this.id,
          },
          on: {
            'checked-change': value => {
              self.$emit('checked-change', value);
            },
          },
        }),
        createElement('label', {
          attrs: {
            for: this.id,
          },
          domProps: {
            textContent: this.label,
          },
        }),
      ]
    );
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
});
Vue.component('note-obj-settings-input-text', {
  render(createElement) {
    const self = this;
    return createElement(
      'div',
      {
        class: 'note-obj-settings-frame-component-package-input-text',
      },
      [
        createElement('span', {
          class: 'note-obj-setttings-frame-before-input-text',
          domProps: {
            textContent: this.label,
          },
        }),
        createElement('input', {
          attrs: {
            type: 'text',
            id: this.id,
          },
          domProps: {
            value: self.value,
          },
          on: {
            change: event => {
              self.$emit('content-change', event.target.value);
            },
          },
        }),
      ]
    );
  },
  props: {
    id: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: true,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
});
Vue.component('note-obj-settings-input-radio', {
  render(createElement) {
    const self = this;
    return createElement(
      'div',
      {
        class: 'note-obj-settings-frame-component-package',
      },
      [
        createElement('input', {
          attrs: {
            type: 'radio',
            id: this.id,
            value: this.value,
          },
          domProps: {
            checked: this.checkedValue,
          },
          on: {
            change: event => {
              self.$emit('checked-change', event.target.value);
            },
          },
        }),
        createElement('label', {
          attrs: {
            for: this.id,
          },
          domProps: {
            textContent: this.label,
          },
        }),
      ]
    );
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    checkedValue: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      default: 'Undefined.',
    },
  },
});
Vue.component('note-obj-settings-select', {
  render(createElement) {
    const self = this;
    return createElement(
      'div',
      {
        class: 'note-obj-settings-frame-component-package',
      },
      [
        createElement('label', {
          class: 'note-obj-settings-frame-before-select-text',
          attrs: {
            for: this.id,
          },
          domProps: {
            textContent: this.label,
          },
        }),
        createElement(
          'select',
          {
            attrs: {
              id: this.id,
              name: this.id + '_select',
            },
            on: {
              change: event => {
                event.target.value && self.$emit('value-change', event.target.value);
              },
            },
          },
          [
            this.default
              ? createElement('option', {
                  attrs: {
                    value: '',
                  },
                  domProps: {
                    textContent: this.default,
                  },
                })
              : null,
          ].concat(
            Object.keys(this.options).map(key => {
              return createElement('option', {
                key: key,
                attrs: {
                  value: key,
                },
                domProps: {
                  textContent: self.options[key].text,
                },
              });
            })
          )
        ),
      ]
    );
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    default: {
      type: String,
      default: '',
    },
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
});
Vue.component('note-obj-settings-frame-script-item', {
  functional: true,
  render(createElement, context) {
    return createElement(
      'div',
      {
        class: 'note-obj-settings-frame-content-section',
      },
      [
        createElement('span', {
          domProps: {
            textContent: context.props.scriptText,
          },
        }),
        context.props.type === 'a'
          ? createElement('a', {
              attrs: {
                href: context.props.href,
                target: '_blank',
              },
              domProps: {
                textContent: context.props.text,
              },
            })
          : createElement('p', {
              domProps: {
                textContent: context.props.text,
              },
            }),
      ]
    );
  },
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['a', 'p'].indexOf(value) !== -1;
      },
    },
    scriptText: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
    },
  },
});
Vue.component('note-obj-confirm-frame', {
  render(createElement) {
    if (this.isInsert) {
      const self = this;
      return createElement(
        'div',
        {
          attrs: {
            id: this.id + '_confirmFramePresentation',
          },
          class: 'note-obj-confirm-frame-presentation',
        },
        [
          createElement(
            'div',
            {
              class: 'note-obj-confirm-frame-dialog',
            },
            [
              createElement('div', {
                class: 'note-obj-confirm-frame-content',
                domProps: {
                  textContent: this.content,
                },
              }),
              createElement(
                'div',
                {
                  class: 'note-obj-confirm-frame-footer',
                },
                [
                  createElement('span', {
                    attrs: {
                      id: this.id + '_confirmFrameNoBtn',
                      tabIndex: -1,
                    },
                    class: 'note-obj-confirm-frame-no-btn',
                    domProps: {
                      textContent: this.lang.noText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.$emit('click-event', false);
                      },
                      keyup: event => {
                        event.stopPropagation();
                        event.preventDefault();
                        if (event.keyCode === 13 || event.keyCode === 27 || event.keyCode === 39) {
                          self.noKeyUpEvent(event);
                        }
                      },
                    },
                  }),
                  createElement('span', {
                    attrs: {
                      id: this.id + '_confirmFrameYesBtn',
                      tabIndex: -1,
                    },
                    class: 'note-obj-confirm-frame-yes-btn',
                    domProps: {
                      textContent: this.lang.yesText,
                    },
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.$emit('click-event', true);
                      },
                      keyup: event => {
                        event.stopPropagation();
                        event.preventDefault();
                        if (event.keyCode === 13 || event.keyCode === 27 || event.keyCode === 37) {
                          self.yesKeyUpEvent(event);
                        }
                      },
                    },
                  }),
                ]
              ),
            ]
          ),
        ]
      );
    }
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    lang: {
      type: Object,
      required: true,
    },
    isInsert: {
      type: Boolean,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  watch: {
    isInsert(newValue, oldValue) {
      if (newValue != oldValue && newValue) {
        Note_Obj.fn.debounce(() => {
          try {
            if (newValue) {
              const yes = document.querySelector(`#${this.id}_confirmFrameYesBtn`);
              yes && yes.focus();
            }
          } catch (e) {
            console.error('Error in focus command.', e);
          }
        }, 500);
      }
    },
  },
  methods: {
    yesKeyUpEvent(event) {
      if (event.keyCode === 13) {
        this.$emit('click-event', true);
      }
      if (event.keyCode === 37) {
        const no = document.querySelector(`#${this.id}_confirmFrameNoBtn`);
        no && no.focus();
      }
      if (event.keyCode === 27) {
        this.$emit('click-event', false);
      }
    },
    noKeyUpEvent(event) {
      if (event.keyCode === 13 || event.keyCode === 27) {
        this.$emit('click-event', false);
      }
      if (event.keyCode === 39) {
        const yes = document.querySelector(`#${this.id}_confirmFrameYesBtn`);
        yes && yes.focus();
      }
    },
  },
});
Vue.component('note-obj-message-frame', {
  render(createElement) {
    const self = this;
    return createElement(
      'div',
      {
        class: 'note-obj-message-frame-presentation',
      },
      [
        createElement(
          'transition-group',
          {
            props: {
              tag: 'div',
              name: 'note-obj-message-frame-notifaction',
            },
          },
          [
            this.notifactions.map(item => {
              return createElement(
                'div',
                {
                  key: item.id,
                  class: 'note-obj-message-frame-notifaction',
                },
                [
                  createElement('span', {
                    attrs: {
                      'data-id': item.id,
                    },
                    class: 'note-obj-message-frame-close-btn',
                    on: {
                      click: event => {
                        event.stopPropagation();
                        self.$emit('close-event', event.target.dataset.id);
                      },
                    },
                  }),
                  createElement('div', {
                    class: 'note-obj-message-frame-content',
                    domProps: {
                      textContent: item.content,
                    },
                  }),
                ]
              );
            }),
          ]
        ),
      ]
    );
  },
  props: {
    notifactions: {
      type: Array,
      required: true,
    },
  },
});
class Note_Obj {
  constructor(id) {
    this.id = id || 'time-' + Date.now();
    this.configKeyName = '$' + this.id + 'Config';
    this.groupKeyName = '$' + this.id + 'Group';
    this.timeKeyName = '$' + this.id + 'Time';
    this.itemsKeyName = '$' + this.id + 'Items';
    this.items = {};
    this.config = {
      searchBox: {
        showIndex: false,
        canHideSearchFrame: true,
        showButton: true,
        showGroupName: false,
        openNewTab: false,
        enableShortcutKeys: false,
      },
      searchValue: {
        caseSensitive: true,
        split: false,
        regular: false,
      },
      addNote: {
        showNoteGroupName: false,
        hideNoteText: false,
        showNoteGroupColor: false,
        showPopoverFrame: false,
        openNoteNewTab: false,
        canHideAddFrame: true,
        fix: {
          fixValue1: {
            value: '',
            type: 'suf',
          },
          fixValue2: {
            value: '',
            type: 'suf',
          },
          fixValue3: {
            value: '',
            type: 'suf',
          },
          fixValue4: {
            value: '',
            type: 'suf',
          },
          fixValue5: {
            value: '',
            type: 'suf',
          },
        },
      },
      interface: {
        insertSearchButton: true,
        insertSettingsButton: false,
        insertNoteManagementButton: false,
        insertGroupManagementButton: false,
        mode: 'dark',
        language: '',
        autoSync: true,
      },
      other: {},
    };
    this.group = {
      default: {
        value: 'default',
        primaryColor: '',
        secondaryColor: '',
        weight: 0,
      },
    };
    this.storeModificationTime = '';
    this.lang = NOTE_LANG.EN;
    this.menuCommand = {};
    this.listener = {};
    this.style = null;
    this.vm = null;
    this.changeEvent = null;
  }
  async init(initialization = {}) {
    await this.readValuesFromStorage();
    this.config.interface.language = this.config.interface.language || window.navigator.language || document.documentElement.lang;
    this.setLanguage(this.config.interface.language);
    const that = this;
    this.style = document.createElement('style');
    this.style.innerHTML = NOTE_STYLE;
    document.body.appendChild(this.style);
    if (initialization.style && typeof initialization.style === 'string') {
      const externalStyle = document.createElement('style');
      externalStyle.innerHTML = initialization.style;
      document.body.appendChild(externalStyle);
    }
    const envVm = {
      searchBtnClassName: initialization.searchBtnClassName || '',
      searchBtnBoxClassName: initialization.searchBtnBoxClassName || '',
      settingsBtnClassName: initialization.settingsBtnClassName || '',
      noteManagementBtnClassName: initialization.noteManagementBtnClassName || '',
      groupManagementBtnClassName: initialization.groupManagementBtnClassName || '',
      leftBtnBoxClassName: initialization.leftBtnBoxClassName || '',
      itemClick: initialization.itemClick,
      addFrmButtonSet: {
        save: {
          text: this.lang.saveTagText,
          title: this.lang.saveTagTitle,
          event: (id, name, tag, groupKey, _key, _no) => this.writeUser(id, name, tag, groupKey),
        },
        clear: {
          text: this.lang.clearTagText,
          title: this.lang.clearTagTitle,
          event: (id, _name, _tag, _groupKey, _key, _no) => this.writeUser(id, null, null, null),
        },
        cancel: {
          text: this.lang.cancelTagText,
          title: this.lang.cancelTagTitle,
          event: (_id, _name, _tag, _groupKey, _key, _no) => 1,
          isBottom: true,
        },
      },
      changeEvent: initialization.changeEvent || null,
      script: Object.assign(
        {},
        {
          author: {
            name: 'pana',
            homepage: 'https://greasyfork.org/zh-CN/users/193133-pana',
          },
          address: 'https://greasyfork.org/zh-CN/users/193133-pana',
          updated: Note_Obj.fn.getUpdated(),
          core: {
            name: Note_Obj.fn.getVersion() + ' (' + Note_Obj.fn.getUpdated() + ')',
            url: 'https://greasyfork.org/zh-CN/users/193133-pana',
          },
          library: [
            {
              name: 'Vue.js',
              version: '2.6.14',
              url: 'https://vuejs.org/',
            },
          ],
        },
        initialization.script
      ),
      otherSettings: {},
      defaultColor: {
        primaryColor: initialization.primaryColor || '#3c81df',
        secondaryColor: initialization.secondaryColor || '#ffffff',
      },
      type: ['user', 'script'].includes(initialization.type) ? initialization.type : 'user',
    };
    const libraryKeysList = [];
    for (const library of envVm.script.library) {
      libraryKeysList.push(library.name);
    }
    if (!libraryKeysList.includes('Vue.js')) {
      envVm.script.library.splice(0, 0, {
        name: 'Vue.js',
        version: '2.6.14',
        url: 'https://vuejs.org/',
      });
    }
    if (initialization.settings) {
      for (const key in initialization.settings) {
        let label = '';
        if (initialization.settings[key].lang && Object.keys(initialization.settings[key].lang).length > 0) {
          switch (this.config.interface.language.toLowerCase()) {
            case 'zh':
            case 'zh-cn':
            case 'zh-hans':
            case 'zh_cn':
            case 'zh_hans':
              label = initialization.settings[key].lang.zh_cn;
              break;
            case 'zh-hk':
            case 'zh-tw':
            case 'zh-hant':
            case 'zh_hk':
            case 'zh_tw':
            case 'zh_hant':
              label = initialization.settings[key].lang.zh_tw;
              break;
            case 'ja':
              label = initialization.settings[key].lang.ja;
              break;
            case 'ko':
              label = initialization.settings[key].lang.ko;
              break;
            case 'fr':
              label = initialization.settings[key].lang.fr;
              break;
            case 'en':
            default:
              label = initialization.settings[key].lang.en;
              break;
          }
          if (!label) {
            label = initialization.settings[key].lang[Object.keys(initialization.settings[key].lang)[0]];
          }
        }
        envVm.otherSettings[key] = {
          type: initialization.settings[key].type || 'checkbox',
          lang: initialization.settings[key].lang,
          label: label || 'Undefined.',
          options: initialization.settings[key].options || {},
          event: null || initialization.settings[key].event,
        };
        if (this.config.other[key] === undefined) {
          if (envVm.otherSettings[key].type === 'checkbox') {
            this.config.other[key] = initialization.settings[key].default || false;
          } else {
            this.config.other[key] = initialization.settings[key].default || '';
          }
        }
      }
    }
    for (const key in this.group) {
      if (!this.group[key].primaryColor) {
        this.group[key].primaryColor = envVm.defaultColor.primaryColor;
      }
      if (!this.group[key].secondaryColor) {
        this.group[key].secondaryColor = envVm.defaultColor.secondaryColor;
      }
    }
    const vueDiv = document.createElement('div');
    vueDiv.className = 'note-obj-vue-module';
    vueDiv.innerHTML = `
            <div 
                id="${this.id}_vue" 
                class="note-obj-vue-div"
                >
            </div>
        `;
    document.body.appendChild(vueDiv);
    this.changeEvent = envVm.changeEvent;
    this.vm = new Vue({
      el: `#${this.id}_vue`,
      data: {
        id: this.id,
        searchFrame: {
          isShow: false,
          isEcho: false,
        },
        addFrame: {
          isShow: false,
          userId: '',
          userName: '',
          value: '',
          groupKey: '',
          buttonSet: envVm.addFrmButtonSet,
        },
        managementFrame: {
          isInsert: false,
          isEcho: false,
        },
        groupFrame: {
          isInsert: false,
          items: this.group,
        },
        selectGroupFrame: {
          isShow: false,
        },
        newGroupFrame: {
          isShow: false,
          userId: '',
        },
        settingsFrame: {
          isInsert: false,
          items: this.config,
          storeModificationTime: this.storeModificationTime,
        },
        confirmFrame: {
          isInsert: false,
          content: '',
        },
        messageFrame: {
          notifactions: [],
          total: 0,
        },
        languageVirualFrame: {
          lang: this.lang,
        },
        noteVirualFrame: {
          items: this.items,
        },
        popoverFrame: {
          isShow: false,
          userId: '',
          current: {},
          items: {},
          groupName: '',
          x: 0,
          y: 0,
          isHover: false,
        },
      },
      computed: {
        interfaceSkinClassName() {
          return this.settingsFrame.items.interface.mode === 'dark' ? 'note-obj-interface-dark' : 'note-obj-interface-bright';
        },
      },
      render(createElement) {
        return createElement(
          'div',
          {
            attrs: {
              id: this.id + '_vue',
            },
            class: 'note-obj-vue-div ' + this.interfaceSkinClassName,
          },
          [
            createElement('note-obj-popover-frame', {
              on: {
                'item-click': (key, ctrlKey, shiftKey) => {
                  this.openLinkEvent(key, ctrlKey, shiftKey, 'popover');
                },
                'mouse-event': status => {
                  if (status) {
                    this.popoverFrame.isHover = true;
                  } else {
                    this.popoverFrame.isHover = false;
                    Note_Obj.fn.debounce(() => {
                      this.popoverFrameHideEvent();
                    }, 1000);
                  }
                },
              },
              props: {
                id: this.id,
                isShow: this.popoverFrame.isShow,
                current: this.popoverFrame.current,
                items: this.popoverFrame.items,
                groupName: this.popoverFrame.groupName,
                x: this.popoverFrame.x,
                y: this.popoverFrame.y,
                openInTab: this.settingsFrame.items.addNote.openNoteNewTab,
                itemClick: envVm.itemClick,
              },
            }),
            createElement('note-obj-single-float-button', {
              on: {
                'click-event': () => {
                  this.searchFrame.isShow = true;
                },
              },
              props: {
                isInsert: this.settingsFrame.items.interface.insertSearchButton,
                title: this.languageVirualFrame.lang.searchTagTitle,
                className: 'note-obj-search-expand-span',
                boxClassName: 'note-obj-search-expand-box',
                extraClassName: envVm.searchBtnClassName,
                extraBoxClassName: envVm.searchBtnBoxClassName,
              },
            }),
            createElement('note-obj-set-float-button', {
              on: {
                'click-event': key => {
                  if (key === 'settings') {
                    this.settingsFrame.isInsert = true;
                  } else if (key === 'note') {
                    this.managementFrame.isInsert = true;
                  } else if (key === 'group') {
                    this.groupFrame.isInsert = true;
                  }
                },
              },
              props: {
                buttonSet: {
                  settings: {
                    isInsert: !Note_Obj.GM.hasRegisterMenuCommandMethods() || this.settingsFrame.items.interface.insertSettingsButton,
                    title: this.languageVirualFrame.lang.gmSettingsText,
                    className: 'note-obj-settings-expand-span',
                    extraClassName: envVm.settingsBtnClassName,
                  },
                  note: {
                    isInsert: this.settingsFrame.items.interface.insertNoteManagementButton,
                    title: this.languageVirualFrame.lang.gmManagementText,
                    className: 'note-obj-note-management-expand-span',
                    extraClassName: envVm.noteManagementBtnClassName,
                  },
                  group: {
                    isInsert: this.settingsFrame.items.interface.insertGroupManagementButton,
                    title: this.languageVirualFrame.lang.gmGroupText,
                    className: 'note-obj-group-management-expand-span',
                    extraClassName: envVm.groupManagementBtnClassName,
                  },
                },
                boxClassName: 'note-obj-left-expand-box',
                extraBoxClassName: envVm.leftBtnBoxClassName,
              },
            }),
            createElement('note-obj-search-frame', {
              on: {
                'presentation-click': () => {
                  if (this.settingsFrame.items.searchBox.canHideSearchFrame) {
                    this.searchFrame.isShow = false;
                  }
                },
                'close-click': () => {
                  this.searchFrame.isShow = false;
                },
                'list-item-click': (key, ctrlKey, shiftKey) => {
                  this.openLinkEvent(key, ctrlKey, shiftKey, 'search');
                },
                'list-item-edit': key => {
                  this.addFrame.userId = key;
                  this.addFrame.userName = this.noteVirualFrame.items[key].name || key;
                  this.addFrame.value = this.noteVirualFrame.items[key].tag || '';
                  this.addFrame.groupKey = this.noteVirualFrame.items[key].group || '';
                  this.searchFrame.isShow = false;
                  this.searchFrame.isEcho = true;
                  this.addFrame.isShow = true;
                },
                'list-item-delete': key => {
                  this.confirmFrameAddContent(this.languageVirualFrame.lang.deleteConfirmText, r => {
                    if (r && that.writeUser(key, null, null, null)) {
                      this.messageFrameAddNotifaction(this.languageVirualFrame.lang.deleteTagNotifactionText);
                      typeof envVm.changeEvent === 'function' && envVm.changeEvent(that, key);
                    }
                    const el = document.querySelector(`#${this.id}_searchFrameInputBox`);
                    el &&
                      Note_Obj.fn.debounce(() => {
                        try {
                          el.focus();
                        } catch (e) {
                          console.error('Error in focus command.', e);
                        }
                      }, 200);
                  });
                },
              },
              props: {
                id: this.id,
                lang: this.languageVirualFrame.lang,
                isShow: this.searchFrame.isShow,
                originalItems: this.noteVirualFrame.items,
                showIndex: this.settingsFrame.items.searchBox.showIndex,
                showButton: this.settingsFrame.items.searchBox.showButton,
                showGroupName: this.settingsFrame.items.searchBox.showGroupName,
                determineSearchString: this.determineSearchString,
                group: this.groupFrame.items,
                openInTab: this.settingsFrame.items.searchBox.openNewTab,
                itemClick: envVm.itemClick,
              },
            }),
            createElement('note-obj-add-frame', {
              on: {
                'presentation-click': () => {
                  if (this.settingsFrame.items.addNote.canHideAddFrame) {
                    this.addFrame.isShow = false;
                    if (this.searchFrame.isEcho) {
                      this.searchFrame.isShow = true;
                      this.searchFrame.isEcho = false;
                    }
                  }
                },
                'button-click': (id, name, tag, groupKey, key) => {
                  const status = this.addFrame.buttonSet[key].event(id, name, tag, groupKey, key);
                  if (status) {
                    if (status !== 1) {
                      this.messageFrameAddNotifaction(this.languageVirualFrame.lang.saveCompletedNotifactionText);
                      typeof envVm.changeEvent === 'function' && envVm.changeEvent(that, id);
                    }
                    this.addFrame.isShow = false;
                    if (this.searchFrame.isEcho) {
                      this.searchFrame.isShow = true;
                      this.searchFrame.isEcho = false;
                    }
                  } else {
                    this.messageFrameAddNotifaction(this.languageVirualFrame.lang.saveErrorNotifactionText);
                  }
                },
                'save-event': (id, name, tag, groupKey) => {
                  if (that.writeUser(id, name, tag, groupKey)) {
                    this.messageFrameAddNotifaction(this.languageVirualFrame.lang.saveCompletedNotifactionText);
                    this.addFrame.isShow = false;
                    if (this.searchFrame.isEcho) {
                      this.searchFrame.isShow = true;
                      this.searchFrame.isEcho = false;
                    }
                    typeof envVm.changeEvent === 'function' && envVm.changeEvent(that, id);
                  } else {
                    this.messageFrameAddNotifaction(this.languageVirualFrame.lang.saveErrorNotifactionText);
                  }
                },
                'quit-frame': () => {
                  this.addFrame.isShow = false;
                  if (this.searchFrame.isEcho) {
                    this.searchFrame.isShow = true;
                    this.searchFrame.isEcho = false;
                  }
                },
                'create-group': userId => {
                  this.newGroupFrame.userId = userId;
                  this.newGroupFrame.isShow = true;
                },
              },
              props: {
                id: this.id,
                lang: this.languageVirualFrame.lang,
                isShow: this.addFrame.isShow,
                value: this.addFrame.value,
                groupKey: this.addFrame.groupKey,
                userId: this.addFrame.userId,
                userName: this.addFrame.userName,
                buttonSet: this.addFrame.buttonSet,
                selectGroupFrameAddHandleId: this.selectGroupFrameAddHandleId,
                group: this.groupFrame.items,
                type: envVm.type,
              },
            }),
            createElement('note-obj-management-frame', {
              on: {
                'quit-frame': () => {
                  this.managementFrame.isInsert = false;
                },
                'save-event': saveObj => {
                  if (that.setUsers(saveObj)) {
                    typeof envVm.changeEvent === 'function' && envVm.changeEvent(that);
                    this.messageFrameAddNotifaction(this.languageVirualFrame.lang.saveCompletedNotifactionText);
                  } else {
                    this.messageFrameAddNotifaction(this.languageVirualFrame.lang.saveErrorNotifactionText);
                  }
                },
                'message-event': contentText => {
                  this.messageFrameAddNotifaction(contentText);
                },
                'manage-groups': () => {
                  this.managementFrame.isInsert = false;
                  this.managementFrame.isEcho = true;
                  this.groupFrame.isInsert = true;
                },
                'create-group': () => {
                  this.newGroupFrame.userId = null;
                  this.newGroupFrame.isShow = true;
                },
              },
              props: {
                id: this.id,
                lang: this.languageVirualFrame.lang,
                isInsert: this.managementFrame.isInsert,
                originalItems: this.noteVirualFrame.items,
                determineSearchString: this.determineSearchString,
                group: this.groupFrame.items,
                selectGroupFrameAddHandleId: this.selectGroupFrameAddHandleId,
                type: envVm.type,
                itemClick: envVm.itemClick,
              },
            }),
            createElement('note-obj-group-frame', {
              on: {
                'quit-frame': () => {
                  this.groupFrame.isInsert = false;
                  if (this.managementFrame.isEcho) {
                    this.managementFrame.isInsert = true;
                    this.managementFrame.isEcho = false;
                  }
                },
                'save-event': saveObj => {
                  if (that.writeGroup(saveObj)) {
                    typeof envVm.changeEvent === 'function' && envVm.changeEvent(that);
                    if (this.managementFrame.isEcho) {
                      this.groupFrame.isInsert = false;
                      this.managementFrame.isInsert = true;
                      this.managementFrame.isEcho = false;
                    }
                    this.messageFrameAddNotifaction(this.languageVirualFrame.lang.saveCompletedNotifactionText);
                  } else {
                    this.messageFrameAddNotifaction(this.languageVirualFrame.lang.saveErrorNotifactionText);
                  }
                },
                'message-event': contentText => {
                  this.messageFrameAddNotifaction(contentText);
                },
              },
              props: {
                id: this.id,
                lang: this.languageVirualFrame.lang,
                isInsert: this.groupFrame.isInsert,
                originalItems: this.groupFrame.items,
                determineSearchString: this.determineSearchString,
                defaultColor: envVm.defaultColor,
              },
            }),
            createElement('note-obj-select-group-frame', {
              on: {
                'presentation-click': () => {
                  this.selectGroupFrame.isShow = false;
                },
                'quit-frame': () => {
                  this.selectGroupFrame.isShow = false;
                },
                'click-event': key => {
                  this.selectGroupFrameCallback(key);
                  this.selectGroupFrame.isShow = false;
                },
              },
              props: {
                id: this.id,
                lang: this.languageVirualFrame.lang,
                isShow: this.selectGroupFrame.isShow,
                group: this.groupFrame.items,
              },
            }),
            createElement('note-obj-new-group-frame', {
              on: {
                'presentation-click': () => {
                  this.newGroupFrame.isShow = false;
                },
                'quit-event': () => {
                  this.newGroupFrame.isShow = false;
                },
                'save-event': (groupKey, groupValue, primaryColor, secondaryColor, weight, userId) => {
                  if (groupValue) {
                    if (
                      that.writeNewGroupValue(groupKey, {
                        value: groupValue,
                        primaryColor: primaryColor,
                        secondaryColor: secondaryColor,
                        weight: weight,
                      })
                    ) {
                      this.messageFrameAddNotifaction(this.languageVirualFrame.lang.createNewGroupNotifactionText);
                      if (userId) {
                        this.addFrame.groupKey = groupKey;
                      }
                      this.newGroupFrame.isShow = false;
                    }
                  }
                },
              },
              props: {
                id: this.id,
                lang: this.languageVirualFrame.lang,
                isShow: this.newGroupFrame.isShow,
                defaultColor: envVm.defaultColor,
                userId: this.newGroupFrame.userId,
              },
            }),
            createElement('note-obj-settings-frame', {
              on: {
                'quit-frame': () => {
                  this.settingsFrame.isInsert = false;
                },
                'export-click': () => {
                  Note_Obj.fn.downloadText(JSON.stringify(this.settingsFrame.items), `${this.id}_config_${Date.now()}.txt`, () => {
                    this.messageFrameAddNotifaction(this.languageVirualFrame.lang.exportConfigNotifactionText);
                  });
                },
                'import-click': () => {
                  Note_Obj.fn.openFile((res, content) => {
                    if (res) {
                      if (content) {
                        try {
                          const importObj = JSON.parse(content);
                          if (typeof importObj === 'object' && importObj) {
                            if (Object.keys(importObj).length > 0) {
                              this.$set(this.settingsFrame, 'items', Object.assign({}, this.settingsFrame.items, importObj));
                            }
                            this.messageFrameAddNotifaction(this.languageVirualFrame.lang.importConfigNotifactionText);
                          } else {
                            console.warn('Content is not an object.');
                            this.messageFrameAddNotifaction(this.languageVirualFrame.lang.notObjectNotifactionText);
                          }
                        } catch (e) {
                          console.error('There was an error in the parsing of the object.', e);
                          this.messageFrameAddNotifaction(this.languageVirualFrame.lang.errorImportNotifactionText);
                        }
                      } else {
                        console.warn('The contents of the file are empty.');
                        this.messageFrameAddNotifaction(this.languageVirualFrame.lang.emptyFileNotifactionText);
                      }
                    } else {
                      content === 'valid' &&
                        this.messageFrameAddNotifaction(this.languageVirualFrame.lang.incorrectFileSelectedNotifactionText);
                    }
                  });
                },
                'save-click': () => {
                  if (that.writeConfig()) {
                    this.messageFrameAddNotifaction(this.languageVirualFrame.lang.saveCompletedNotifactionText);
                  } else {
                    this.messageFrameAddNotifaction(this.languageVirualFrame.lang.saveErrorNotifactionText);
                  }
                },
                'help-translate-click': () => {
                  const translateLang = {};
                  translateLang.basic = Object.assign({}, NOTE_LANG);
                  if (envVm.otherSettings && Object.keys(envVm.otherSettings).length > 0) {
                    translateLang.extra = {};
                    for (const key in envVm.otherSettings) {
                      translateLang.extra[key] = Object.assign({}, envVm.otherSettings[key].lang);
                    }
                  }
                  Note_Obj.fn.downloadText(JSON.stringify(translateLang, null, 4), `${this.id}_language_${Date.now()}.config`, () => {
                    this.messageFrameAddNotifaction(this.languageVirualFrame.lang.exportConfigNotifactionText);
                  });
                },
                'export-store-click': () => {
                  that.gmExport();
                },
                'import-store-click': () => {
                  that.gmImport(() => {
                    typeof envVm.changeEvent === 'function' && envVm.changeEvent(that);
                  });
                },
              },
              props: {
                id: this.id,
                lang: this.languageVirualFrame.lang,
                isInsert: this.settingsFrame.isInsert,
                items: this.settingsFrame.items,
                otherSettingsInfo: envVm.otherSettings,
                script: envVm.script,
                storeModificationTime: this.settingsFrame.storeModificationTime,
              },
            }),
            createElement('note-obj-confirm-frame', {
              on: {
                'click-event': res => {
                  this.confirmFrameCallback(res);
                  this.confirmFrame.isInsert = false;
                },
              },
              props: {
                id: this.id,
                lang: this.languageVirualFrame.lang,
                isInsert: this.confirmFrame.isInsert,
                content: this.confirmFrame.content,
              },
            }),
            createElement('note-obj-message-frame', {
              on: {
                'close-event': id => {
                  for (const i in this.messageFrame.notifactions) {
                    this.messageFrame.notifactions[i].id === id && this.messageFrame.notifactions.splice(i, 1);
                  }
                },
              },
              props: {
                notifactions: this.messageFrame.notifactions,
              },
            }),
          ]
        );
      },
      watch: {
        'popoverFrame.userId'(newValue, oldValue) {
          if (newValue != oldValue) {
            const userId = newValue;
            if (
              userId &&
              this.noteVirualFrame.items[userId] &&
              this.noteVirualFrame.items[userId].group &&
              this.noteVirualFrame.items[userId].group !== 'default'
            ) {
              const groupKey = this.noteVirualFrame.items[userId].group;
              const groupKeysList = Object.keys(this.groupFrame.items);
              if (groupKeysList.includes(groupKey)) {
                const groupSet = {};
                for (const key in this.noteVirualFrame.items) {
                  if (this.noteVirualFrame.items[key].group === groupKey && key !== userId) {
                    groupSet[key] = Object.assign({}, this.noteVirualFrame.items[key]);
                  }
                }
                if (Object.keys(groupSet).length > 0) {
                  this.$set(this.popoverFrame, 'items', groupSet);
                  this.$set(this.popoverFrame, 'current', Object.assign({}, this.noteVirualFrame.items[userId]));
                  this.popoverFrame.groupName = this.groupFrame.items[groupKey].value;
                  this.popoverFrame.isShow = true;
                } else {
                  this.$set(this.popoverFrame, 'items', {});
                  this.$set(this.popoverFrame, 'current', {});
                  this.popoverFrame.groupName = '';
                  this.popoverFrame.isShow = false;
                }
              } else {
                this.$set(this.popoverFrame, 'items', {});
                this.$set(this.popoverFrame, 'current', {});
                this.popoverFrame.groupName = '';
                this.popoverFrame.isShow = false;
              }
            } else {
              this.$set(this.popoverFrame, 'items', {});
              this.$set(this.popoverFrame, 'current', {});
              this.popoverFrame.groupName = '';
              this.popoverFrame.isShow = false;
            }
          }
        },
        'settingsFrame.items.addNote.fix.fixValue1.value'(newValue, oldValue) {
          newValue != oldValue && this.settingsFrameFixChangeEvent();
        },
        'settingsFrame.items.addNote.fix.fixValue1.type'(newValue, oldValue) {
          newValue != oldValue && this.settingsFrameFixChangeEvent();
        },
        'settingsFrame.items.addNote.fix.fixValue2.value'(newValue, oldValue) {
          newValue != oldValue && this.settingsFrameFixChangeEvent();
        },
        'settingsFrame.items.addNote.fix.fixValue2.type'(newValue, oldValue) {
          newValue != oldValue && this.settingsFrameFixChangeEvent();
        },
        'settingsFrame.items.addNote.fix.fixValue3.value'(newValue, oldValue) {
          newValue != oldValue && this.settingsFrameFixChangeEvent();
        },
        'settingsFrame.items.addNote.fix.fixValue3.type'(newValue, oldValue) {
          newValue != oldValue && this.settingsFrameFixChangeEvent();
        },
        'settingsFrame.items.addNote.fix.fixValue4.value'(newValue, oldValue) {
          newValue != oldValue && this.settingsFrameFixChangeEvent();
        },
        'settingsFrame.items.addNote.fix.fixValue4.type'(newValue, oldValue) {
          newValue != oldValue && this.settingsFrameFixChangeEvent();
        },
        'settingsFrame.items.addNote.fix.fixValue5.value'(newValue, oldValue) {
          newValue != oldValue && this.settingsFrameFixChangeEvent();
        },
        'settingsFrame.items.addNote.fix.fixValue5.type'(newValue, oldValue) {
          newValue != oldValue && this.settingsFrameFixChangeEvent();
        },
        'settingsFrame.items.addNote.showNoteGroupName'(newValue, oldValue) {
          newValue != oldValue && typeof envVm.changeEvent === 'function' && envVm.changeEvent(that);
        },
        'settingsFrame.items.addNote.hideNoteText'(newValue, oldValue) {
          newValue != oldValue && typeof envVm.changeEvent === 'function' && envVm.changeEvent(that);
        },
        'settingsFrame.items.addNote.showNoteGroupColor'(newValue, oldValue) {
          newValue != oldValue && typeof envVm.changeEvent === 'function' && envVm.changeEvent(that);
        },
        'settingsFrame.items.addNote.showPopoverFrame'(newValue, oldValue) {
          newValue != oldValue && typeof envVm.changeEvent === 'function' && envVm.changeEvent(that);
        },
        'settingsFrame.items.interface.language'(newValue, oldValue) {
          if (newValue != oldValue) {
            that.setLanguage(newValue);
            this.$set(this.languageVirualFrame, 'lang', that.lang);
            this.addFrame.buttonSet.save.text = this.languageVirualFrame.lang.saveTagText;
            this.addFrame.buttonSet.save.title = this.languageVirualFrame.lang.saveTagTitle;
            this.addFrame.buttonSet.clear.text = this.languageVirualFrame.lang.clearTagText;
            this.addFrame.buttonSet.clear.title = this.languageVirualFrame.lang.clearTagTitle;
            this.addFrame.buttonSet.cancel.text = this.languageVirualFrame.lang.cancelTagText;
            this.addFrame.buttonSet.cancel.title = this.languageVirualFrame.lang.cancelTagTitle;
            this.settingsFrameFixChangeEvent();
            for (const key in envVm.otherSettings) {
              let label = '';
              if (envVm.otherSettings[key].lang && Object.keys(envVm.otherSettings[key].lang).length > 0) {
                switch (newValue) {
                  case 'zh':
                  case 'zh-cn':
                  case 'zh-hans':
                  case 'zh_cn':
                  case 'zh_hans':
                    label = envVm.otherSettings[key].lang.zh_cn;
                    break;
                  case 'zh-hk':
                  case 'zh-tw':
                  case 'zh-hant':
                  case 'zh_hk':
                  case 'zh_tw':
                  case 'zh_hant':
                    label = envVm.otherSettings[key].lang.zh_tw;
                    break;
                  case 'ja':
                    label = envVm.otherSettings[key].lang.ja;
                    break;
                  case 'ko':
                    label = envVm.otherSettings[key].lang.ko;
                    break;
                  case 'fr':
                    label = envVm.otherSettings[key].lang.fr;
                    break;
                  case 'en':
                  default:
                    label = envVm.otherSettings[key].lang.en;
                    break;
                }
              }
              if (!label) {
                label = envVm.otherSettings[key].lang[Object.keys(envVm.otherSettings[key].lang)[0]];
              }
              envVm.otherSettings[key].label = label || 'Undefined.';
            }
            that.registerMenuCommand();
          }
        },
        'settingsFrame.items.interface.autoSync'(newValue, oldValue) {
          newValue != oldValue && that.addValueChangeListener(newValue);
        },
      },
      methods: {
        settingsFrameFixChangeEvent() {
          const fixObj = {};
          for (const key in this.settingsFrame.items.addNote.fix) {
            if (this.settingsFrame.items.addNote.fix[key].value && this.settingsFrame.items.addNote.fix[key].value.trim()) {
              const value = this.settingsFrame.items.addNote.fix[key].value;
              const clearValue = value.trim();
              const type = this.settingsFrame.items.addNote.fix[key].type;
              fixObj[key] = {
                text:
                  type === 'pre'
                    ? this.languageVirualFrame.lang.savePrefixText.replace('%s', clearValue)
                    : this.languageVirualFrame.lang.saveSuffixText.replace('%s', clearValue),
                title:
                  type === 'pre'
                    ? this.languageVirualFrame.lang.savePrefixTitle.replace('%s', value.replace(/^\s+/, ''))
                    : this.languageVirualFrame.lang.saveSuffixTitle.replace('%s', value.replace(/\s+$/, '')),
                event: (id, name, tag, groupKey, key, no = false) => {
                  const fix = this.settingsFrame.items.addNote.fix[key].value;
                  let fixTag = tag;
                  if (!tag.includes(fix)) {
                    const aType = this.settingsFrame.items.addNote.fix[key].type;
                    if (aType === 'pre') {
                      fixTag = fix.replace(/^\s+/, '') + tag;
                    } else {
                      fixTag = tag + fix.replace(/\s+$/, '');
                    }
                  }
                  if (no) {
                    return fixTag;
                  }
                  return that.writeUser(id, name, fixTag, groupKey);
                },
              };
            }
          }
          this.$set(this.addFrame, 'buttonSet', Object.assign({}, fixObj, envVm.addFrmButtonSet));
        },
        selectGroupFrameAddHandleId(callback) {
          this.selectGroupFrameCallback = callback;
          this.selectGroupFrame.isShow = true;
        },
        selectGroupFrameCallback(key) {
          console.warn('There is no function replacement. The key is ' + key);
        },
        confirmFrameCallback(result) {
          console.warn('There is no function replacement. The result is ' + result);
        },
        confirmFrameAddContent(content, callback) {
          this.confirmFrame.content = content;
          this.confirmFrameCallback = callback;
          this.confirmFrame.isInsert = true;
        },
        messageFrameAddNotifaction(content, id = null, time = 4000) {
          const date = new Date();
          const ntfId = id ? id : `id-${date.getTime()}_${this.messageFrame.total}`;
          this.messageFrame.total++;
          this.messageFrame.notifactions.splice(0, 0, {
            id: ntfId,
            content: content,
          });
          console.info(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] >>> ${content}`);
          const t = typeof time === 'number' && time > 0 ? time : 4000;
          window.setTimeout(() => {
            for (const i in this.messageFrame.notifactions) {
              this.messageFrame.notifactions[i].id === ntfId && this.messageFrame.notifactions.splice(i, 1);
            }
          }, t);
        },
        addFrameAddUser(userId, userName) {
          this.addFrame.userId = userId;
          this.addFrame.userName = userName;
          this.addFrame.value = this.noteVirualFrame.items[userId] ? this.noteVirualFrame.items[userId].tag || '' : '';
          if (this.noteVirualFrame.items[userId]) {
            this.addFrame.groupKey = this.noteVirualFrame.items[userId].group || '';
          }
          this.addFrame.isShow = true;
        },
        popoverFrameAddUserId(userId, x, y) {
          if (this.settingsFrame.items.addNote.showPopoverFrame) {
            this.popoverFrame.userId = userId;
            this.popoverFrame.x = x;
            this.popoverFrame.y = y;
          } else {
            this.popoverFrame.userId = '';
            this.popoverFrame.isShow = false;
            this.popoverFrame.x = 0;
            this.popoverFrame.y = 0;
          }
        },
        popoverFrameHideEvent() {
          if (!this.popoverFrame.isHover) {
            this.popoverFrame.userId = '';
            this.popoverFrame.isShow = false;
            this.popoverFrame.x = 0;
            this.popoverFrame.y = 0;
          }
        },
        openLinkEvent(key, ctrlKey, shiftKey, type) {
          const newUrl = typeof envVm.itemClick === 'function' ? envVm.itemClick(key) : `${window.location.origin}/${key}`;
          if (ctrlKey && shiftKey) {
            newUrl &&
              Note_Obj.GM.openInTab(newUrl, {
                active: true,
                insert: true,
                setParent: true,
              });
          } else if (ctrlKey) {
            newUrl &&
              Note_Obj.GM.openInTab(newUrl, {
                active: false,
                insert: true,
                setParent: true,
              });
          } else if (
            (type === 'search' && this.settingsFrame.items.searchBox.openNewTab) ||
            (type === 'popover' && this.settingsFrame.items.addNote.openNoteNewTab)
          ) {
            newUrl &&
              Note_Obj.GM.openInTab(newUrl, {
                active: true,
                insert: true,
                setParent: true,
              });
          } else if (newUrl) {
            window.location.href = newUrl;
          }
        },
        determineSearchString(searchStr, matchValue) {
          if (searchStr) {
            let r = false;
            let regular = null;
            let s = false;
            let splitArr = [];
            const c = this.settingsFrame.items.searchValue.caseSensitive;
            if (this.settingsFrame.items.searchValue.regular) {
              if (/^\/.+\/[gim]{0,3}$/.test(searchStr)) {
                try {
                  regular = new RegExp(searchStr.replace(/^\/|\/[gim]{0,3}$/g, ''), searchStr.replace(/^\/.+\/[^gim]*/i, ''));
                  r = true;
                } catch (_e) {
                  regular = null;
                  r = false;
                }
              }
            }
            if (!r && this.settingsFrame.items.searchValue.split) {
              splitArr = searchStr.split(/\s+/);
              if (splitArr.length > 0) {
                s = true;
              }
            }
            let res = true;
            if (r) {
              res = regular.test(matchValue);
            } else {
              if (s) {
                for (const item of splitArr) {
                  if (c) {
                    if (!matchValue.includes(item)) {
                      res = false;
                    }
                  } else {
                    if (!matchValue.toLocaleLowerCase().includes(item.toLocaleLowerCase())) {
                      res = false;
                    }
                  }
                }
              } else {
                if (c) {
                  res = matchValue.includes(searchStr);
                } else {
                  res = matchValue.toLocaleLowerCase().includes(searchStr.toLocaleLowerCase());
                }
              }
            }
            return res;
          }
          return true;
        },
      },
      created() {
        document.onkeydown = e => {
          if (that.getFrameStatus(true)) {
            const ev = e || window.event;
            const eKeyCode = ev.keyCode || ev.which || ev.charCode;
            const eCtrl = ev.ctrlKey || ev.metaKey;
            const eShift = ev.shiftKey;
            if (eKeyCode === 70 && eCtrl && eShift) {
              this.searchFrame.isShow = !this.searchFrame.isShow;
            }
          }
        };
        this.settingsFrameFixChangeEvent();
      },
    });
    this.registerMenuCommand();
    this.addValueChangeListener();
  }
  getConfig() {
    return Object.assign({}, this.config);
  }
  getItemsList() {
    return Object.assign({}, this.items);
  }
  getGroup() {
    return Object.assign({}, this.group);
  }
  getFrameStatus(maskSearch) {
    if (this.vm.settingsFrame.isInsert) {
      return false;
    } else if (this.vm.managementFrame.isInsert) {
      return false;
    } else if (this.vm.groupFrame.isInsert) {
      return false;
    } else if (this.vm.confirmFrame.isInsert) {
      return false;
    } else if (this.vm.addFrame.isShow || this.vm.selectGroupFrame.isShow || this.vm.newGroupFrame.isShow) {
      return false;
    } else if (!maskSearch && this.vm.searchFrame.isShow) {
      return false;
    }
    return true;
  }
  closeAllFrame() {
    this.vm.settingsFrame.isInsert = false;
    this.vm.searchFrame.isShow = false;
    this.vm.addFrame.isShow = false;
    this.vm.managementFrame.isInsert = false;
    this.vm.groupFrame.isInsert = false;
    this.vm.confirmFrame.isInsert = false;
    this.vm.selectGroupFrame.isShow = false;
    this.vm.newGroupFrame.isShow = false;
  }
  gmSettings() {
    if (this.getFrameStatus()) {
      this.vm.settingsFrame.isInsert = true;
    }
  }
  gmManagement() {
    if (this.getFrameStatus()) {
      this.vm.managementFrame.isInsert = true;
    }
  }
  gmGroup() {
    if (this.getFrameStatus()) {
      this.vm.groupFrame.isInsert = true;
    }
  }
  gmSearch() {
    if (this.getFrameStatus()) {
      this.vm.searchFrame.isShow = true;
    }
  }
  async gmExport() {
    const keysList = await Note_Obj.GM.listValues();
    const exportObj = {};
    for (const key of keysList) {
      exportObj[key] = await Note_Obj.GM.getValue(key, {});
    }
    Note_Obj.fn.downloadText(JSON.stringify(exportObj), `${this.id}_data_${Date.now()}.txt`, () => {
      this.vm.messageFrameAddNotifaction(this.lang.backUpNotifactionText);
    });
  }
  gmImport(callback) {
    Note_Obj.fn.openFile((res, content) => {
      if (res) {
        if (content) {
          try {
            const importObj = JSON.parse(content);
            if (typeof importObj === 'object' && importObj) {
              let isOldVersionData = true;
              for (const key in importObj) {
                if (key === this.configKeyName) {
                  this.writeConfig(importObj[key]);
                  delete importObj[key];
                } else if (key === this.groupKeyName) {
                  this.writeGroup(importObj[key]);
                  delete importObj[key];
                } else if (key === this.itemsKeyName) {
                  this.setUsers(importObj[key]);
                  isOldVersionData = false;
                }
              }
              isOldVersionData && this.setUsers(importObj);
              this.closeAllFrame();
              typeof this.changeEvent === 'function' && this.changeEvent(this);
              typeof callback === 'function' && callback();
              this.vm.messageFrameAddNotifaction(this.lang.restoreNotifactionText);
            } else {
              console.warn('Content is not an object.');
              this.vm.messageFrameAddNotifaction(this.lang.notObjectNotifactionText);
            }
          } catch (e) {
            console.error('There was an error in the parsing of the object.', e);
            this.vm.messageFrameAddNotifaction(this.lang.errorImportNotifactionText);
          }
        } else {
          console.warn('The contents of the file are empty.');
          this.vm.messageFrameAddNotifaction(this.lang.emptyFileNotifactionText);
        }
      } else {
        content === 'valid' && this.vm.messageFrameAddNotifaction(this.lang.incorrectFileSelectedNotifactionText);
      }
    });
  }
  async readValuesFromStorage() {
    const keysList = await Note_Obj.GM.listValues();
    if (!this.configKeyName) {
      this.configKeyName = '$' + this.id + 'Config';
    }
    if (!this.groupKeyName) {
      this.groupKeyName = '$' + this.id + 'Group';
    }
    if (!this.timeKeyName) {
      this.timeKeyName = '$' + this.id + 'Time';
    }
    if (!this.itemsKeyName) {
      this.itemsKeyName = '$' + this.id + 'Items';
    }
    if (Array.isArray(keysList)) {
      let readOldDataState = false;
      for (const key of keysList) {
        const keyData = await Note_Obj.GM.getValue(key, null);
        if (keyData) {
          if (key === this.configKeyName) {
            for (const cKey in this.config) {
              if (keyData[cKey]) {
                this.config[cKey] = Object.assign(this.config[cKey], keyData[cKey]);
              }
            }
          } else if (key === this.groupKeyName) {
            Object.assign(this.group, keyData);
          } else if (key === this.timeKeyName) {
            this.storeModificationTime = keyData;
          } else if (key === this.itemsKeyName) {
            this.items = Object.assign(this.items, keyData);
          } else {
            if (keyData.tag) {
              if (!this.items[key]) {
                if (!keyData.name) {
                  keyData.name = key;
                }
                this.items[key] = keyData;
                readOldDataState = true;
              }
            }
            Note_Obj.GM.deleteValue(key);
          }
        }
      }
      readOldDataState && Note_Obj.GM.setValue(this.itemsKeyName, this.items);
    }
  }
  writeConfig(configObj = null) {
    try {
      const keysList = Object.keys(this.vm.settingsFrame.items);
      configObj && Vue.set(this.vm.settingsFrame, 'items', Object.assign({}, this.config, configObj));
      for (const key in this.vm.settingsFrame.items) {
        if (!keysList.includes(key)) {
          Vue.delete(this.vm.settingsFrame.items, key);
        }
      }
      Note_Obj.GM.setValue(this.configKeyName, this.config);
      this.vm.settingsFrame.storeModificationTime = Date.now();
      Note_Obj.GM.setValue(this.timeKeyName, this.vm.settingsFrame.storeModificationTime);
      return true;
    } catch (e) {
      console.error('Error in storage operation.', e);
      return false;
    }
  }
  writeGroup(groupObj) {
    try {
      if (typeof groupObj === 'object' && groupObj) {
        this.group = groupObj;
        for (const key in this.group) {
          if (key !== 'defalut' && !this.group[key].value) {
            Vue.delete(this.group, key);
          }
        }
        Vue.set(this.vm.groupFrame, 'items', this.group);
      }
      Note_Obj.GM.setValue(this.groupKeyName, this.group);
      this.vm.settingsFrame.storeModificationTime = Date.now();
      Note_Obj.GM.setValue(this.timeKeyName, this.vm.settingsFrame.storeModificationTime);
      return true;
    } catch (e) {
      console.error('Error in storage operation.', e);
      return false;
    }
  }
  writeNewGroupValue(groupKey, newGroup) {
    try {
      Vue.set(this.group, groupKey, newGroup);
      Note_Obj.GM.setValue(this.groupKeyName, this.group);
      this.vm.settingsFrame.storeModificationTime = Date.now();
      Note_Obj.GM.setValue(this.timeKeyName, this.vm.settingsFrame.storeModificationTime);
      return true;
    } catch (e) {
      console.error('Error in storage operation.', e);
      return false;
    }
  }
  writeNewUserName(userId, userName) {
    try {
      if (this.judgeUsers(userId) && userName) {
        let writeStatus = false;
        if (this.items[userId].name == null) {
          Vue.set(this.items[userId], 'name', userName);
          writeStatus = true;
        } else if (this.items[userId].name !== userName) {
          this.items[userId].name = userName;
          writeStatus = true;
        }
        if (writeStatus) {
          Note_Obj.GM.setValue(this.itemsKeyName, this.items);
          this.vm.settingsFrame.storeModificationTime = Date.now();
          Note_Obj.GM.setValue(this.timeKeyName, this.vm.settingsFrame.storeModificationTime);
        }
      }
      return true;
    } catch (e) {
      console.error('Error in storage operation.', e);
      return false;
    }
  }
  writeUser(userId, name, tag, groupKey) {
    try {
      let writeStatus = false;
      if (this.judgeUsers(userId)) {
        if (tag || groupKey) {
          if (this.items[userId].tag != tag) {
            this.items[userId].tag = tag || '';
            writeStatus = true;
          }
          if (name && this.items[userId].name != name) {
            this.items[userId].name = name;
            writeStatus = true;
          }
          if (groupKey && groupKey !== 'dufault') {
            if (this.items[userId].group != groupKey) {
              Vue.set(this.items[userId], 'group', groupKey);
              writeStatus = true;
            }
          } else if (this.items[userId].group != null) {
            Vue.delete(this.items[userId], 'group');
            writeStatus = true;
          }
        } else {
          Vue.delete(this.items, userId);
          writeStatus = true;
        }
      } else {
        if (tag || groupKey) {
          const theName = name || userId;
          if (groupKey && groupKey !== 'dufault') {
            Vue.set(this.items, userId, {
              tag: tag,
              name: theName,
              group: groupKey,
            });
          } else {
            Vue.set(this.items, userId, {
              tag: tag,
              name: theName,
            });
          }
          writeStatus = true;
        }
      }
      if (writeStatus) {
        if (this.judgeUsers(userId)) {
          Note_Obj.GM.setValue(this.itemsKeyName, this.items);
        }
        this.vm.settingsFrame.storeModificationTime = Date.now();
        Note_Obj.GM.setValue(this.timeKeyName, this.vm.settingsFrame.storeModificationTime);
      }
      return true;
    } catch (e) {
      console.error('Error in storage operation.', e);
      return false;
    }
  }
  setUsers(userObj) {
    try {
      if (typeof userObj === 'object' && userObj) {
        for (const key in userObj) {
          if (typeof userObj[key] === 'object') {
            if (!userObj[key].name) {
              userObj[key].name = key;
            }
          } else {
            delete userObj[key];
          }
        }
        this.items = userObj;
        Vue.set(this.vm.noteVirualFrame, 'items', this.items);
      }
      Note_Obj.GM.setValue(this.itemsKeyName, this.items);
      this.vm.settingsFrame.storeModificationTime = Date.now();
      Note_Obj.GM.setValue(this.timeKeyName, this.vm.settingsFrame.storeModificationTime);
      return true;
    } catch (e) {
      console.error('Error in storage operation.', e);
      return false;
    }
  }
  setLanguage(lang) {
    if (lang) {
      if (typeof lang === 'string') {
        switch (lang.toLowerCase()) {
          case 'zh':
          case 'zh-cn':
          case 'zh-hans':
          case 'zh_cn':
          case 'zh_hans':
            this.lang = NOTE_LANG.ZH;
            break;
          case 'zh-hk':
          case 'zh-tw':
          case 'zh-hant':
          case 'zh_hk':
          case 'zh_tw':
          case 'zh_hant':
            this.lang = NOTE_LANG.ZH_TW;
            break;
          case 'ja':
            this.lang = NOTE_LANG.JA;
            break;
          case 'ko':
            this.lang = NOTE_LANG.KO;
            break;
          case 'fr':
            this.lang = NOTE_LANG.FR;
            break;
          case 'en':
          default:
            this.lang = NOTE_LANG.EN;
            break;
        }
      } else if (typeof lang === 'object') {
        Object.assign(this.lang, lang);
      } else {
        console.warn(
          'There is an error in the parameter of the language value. The type of language value parameter is ',
          typeof lang,
          '.'
        );
      }
    }
  }
  registerMenuCommand() {
    for (const menu in this.menuCommand) {
      menu && Note_Obj.GM.unregisterMenuCommand(this.menuCommand[menu]);
    }
    this.menuCommand.settings = Note_Obj.GM.registerMenuCommand(this.lang.gmSettingsText, () => this.gmSettings());
    this.menuCommand.management = Note_Obj.GM.registerMenuCommand(this.lang.gmManagementText, () => this.gmManagement());
    this.menuCommand.group = Note_Obj.GM.registerMenuCommand(this.lang.gmGroupText, () => this.gmGroup());
    this.menuCommand.search = Note_Obj.GM.registerMenuCommand(this.lang.gmSearchText, () => this.gmSearch());
    this.menuCommand.export = Note_Obj.GM.registerMenuCommand(this.lang.gmExportText, () => this.gmExport());
    this.menuCommand.import = Note_Obj.GM.registerMenuCommand(this.lang.gmImportText, () => this.gmImport());
  }
  addValueChangeListener(status) {
    const autoStatus = status == null ? this.config.interface.autoSync : status;
    if (this.listener.autoSync) {
      Note_Obj.GM.removeValueChangeListener(this.listener.autoSync);
      this.listener.autoSync = null;
    }
    if (this.listener.config) {
      Note_Obj.GM.removeValueChangeListener(this.listener.config);
      this.listener.config = null;
    }
    if (this.listener.group) {
      Note_Obj.GM.removeValueChangeListener(this.listener.group);
      this.listener.group = null;
    }
    if (autoStatus) {
      this.listener.autoSync = Note_Obj.GM.addValueChangeListener(this.itemsKeyName, (_name, _oldValue, newValue, remote) => {
        if (remote) {
          if (newValue && typeof newValue === 'object') {
            this.items = newValue;
            Vue.set(this.vm.noteVirualFrame, 'items', this.items);
            typeof this.changeEvent === 'function' && this.changeEvent(this);
            this.vm.messageFrameAddNotifaction(this.vm.languageVirualFrame.lang.syncNoteNotifactionText);
          }
        }
      });
      this.listener.config = Note_Obj.GM.addValueChangeListener(this.configKeyName, (_name, _oldValue, newValue, remote) => {
        if (remote) {
          if (newValue) {
            Vue.set(this.vm.settingsFrame, 'items', Object.assign({}, this.config, newValue));
            this.vm.messageFrameAddNotifaction(this.vm.languageVirualFrame.lang.syncConfigNotifactionText);
          }
        }
      });
      this.listener.group = Note_Obj.GM.addValueChangeListener(this.groupKeyName, (_name, _oldValue, newValue, remote) => {
        if (remote) {
          if (newValue && typeof newValue === 'object') {
            this.group = newValue;
            for (const key in this.group) {
              if (key !== 'defalut' && !this.group[key].value) {
                Vue.delete(this.group, key);
              }
            }
            Vue.set(this.vm.groupFrame, 'items', this.group);
            typeof this.changeEvent === 'function' && this.changeEvent(this);
            this.vm.messageFrameAddNotifaction(this.vm.languageVirualFrame.lang.syncGroupNotifactionText);
          }
        }
      });
    }
  }
  judgeUsers(userId) {
    if (userId) {
      const keysArr = Object.keys(this.items);
      return keysArr.includes(userId);
    }
    return false;
  }
  getUserTag(userId, mode = {}, direct = false) {
    const angle = mode.angle || mode.a ? true : false;
    const curly = mode.curly || mode.big || mode.b ? true : false;
    const square = mode.square || mode.medium || mode.m ? true : false;
    const parentheses = mode.parentheses || mode.small || mode.s ? true : false;
    const double = mode.double || mode.de || mode.d;
    const prefix = mode.prefix || mode.p;
    const maskGroup = mode.mask;
    let tag = '';
    if (this.judgeUsers(userId)) {
      tag = this.items[userId].tag;
      if (this.vm.settingsFrame.items.addNote.showNoteGroupName && !maskGroup) {
        const groupName = this.getUserGroupName(userId);
        if (this.vm.settingsFrame.items.addNote.hideNoteText) {
          tag = groupName;
        } else {
          if (groupName) {
            if (tag) {
              tag += ' [' + groupName + ']';
            } else if (direct) {
              tag = userId + ' [' + groupName + ']';
            } else {
              tag = groupName;
            }
          }
        }
      }
      if (tag && prefix) {
        tag = prefix + tag;
      }
      if (tag && double) {
        tag = double + tag + double;
      }
      if (tag) {
        if (angle) {
          tag = '<' + tag + '>';
        } else if (curly) {
          tag = '{' + tag + '}';
        } else if (square) {
          tag = '[' + tag + ']';
        } else if (parentheses) {
          tag = '(' + tag + ')';
        }
      }
    }
    return tag;
  }
  getUserName(userId) {
    if (this.judgeUsers(userId) && this.items[userId].name) {
      return this.items[userId].name;
    }
    return '';
  }
  getUserGroupKey(userId) {
    return this.judgeUsers(userId) ? this.items[userId].group || '' : '';
  }
  getUserGroupName(userId) {
    let groupName = '';
    const groupKey = this.getUserGroupKey(userId);
    if (groupKey && groupKey !== 'default' && this.group[groupKey]) {
      groupName = this.group[groupKey].value;
    }
    return groupName;
  }
  getPrimaryColor(userId) {
    let groupKey = this.getUserGroupKey(userId) || 'default';
    if (!Object.keys(this.group).includes(groupKey)) {
      groupKey = 'default';
    }
    return this.group[groupKey].primaryColor;
  }
  getSecondaryColor(userId) {
    let groupKey = this.getUserGroupKey(userId) || 'default';
    if (!Object.keys(this.group).includes(groupKey)) {
      groupKey = 'default';
    }
    return this.group[groupKey].secondaryColor;
  }
  getShowNoteColorConfig() {
    return this.config.addNote.showNoteGroupColor;
  }
  handler(userId, ele, pathName = null, mode = {}, userName = null) {
    const additional = mode.additional || mode.add;
    let classname = mode.className || mode.classname || mode.class || [];
    if (classname && typeof classname === 'string') {
      classname = classname.split(/\s+/);
    }
    classname && (classname = classname.filter(v => v));
    const title = mode.title ? true : false;
    const symbol = mode.symbol ? mode.symbol : {};
    const restore = mode.restore ? true : false;
    const primaryColor = symbol.primaryColor == null || symbol.primaryColor == true;
    const offsetWidth = symbol.offsetWidth || 0;
    const offsetHeight = symbol.offsetHeight || 0;
    if (additional) {
      if (pathName) {
        const pathEle = ele.querySelector(pathName);
        if (pathEle) {
          const tagEle = pathEle.querySelector('.note-obj-user-tag');
          tagEle && tagEle.remove();
          !restore && this.getUserTag(userId) && pathEle.appendChild(this.createNoteTag(userId, symbol, additional, classname, userName));
        }
      } else {
        const tagEle = ele.querySelector('.note-obj-user-tag');
        tagEle && tagEle.remove();
        !restore && this.getUserTag(userId) && ele.appendChild(this.createNoteTag(userId, symbol, additional, classname, userName));
      }
    } else {
      if (pathName) {
        const sourceEle = ele.querySelector(pathName);
        if (sourceEle) {
          if (!restore && this.getUserTag(userId)) {
            sourceEle.textContent = this.getUserTag(userId, symbol, true);
            if (this.vm.settingsFrame.items.addNote.showNoteGroupColor && primaryColor) {
              sourceEle.style.setProperty('color', this.getPrimaryColor(userId), 'important');
            } else {
              sourceEle.style.setProperty('color', '');
            }
            if (!symbol.maskHover) {
              sourceEle.onmouseenter = event => {
                const x = Note_Obj.fn.getElementRight(event.target);
                const y = Note_Obj.fn.getElementBottom(event.target);
                Note_Obj.fn.debounce(() => {
                  this.vm.popoverFrameAddUserId(userId, x + offsetWidth, y + offsetHeight);
                }, 1000);
              };
              sourceEle.onmouseleave = _event => {
                Note_Obj.fn.debounce(() => {
                  this.vm.popoverFrameHideEvent();
                }, 1000);
              };
            }
            if (title) {
              sourceEle.title = userId;
            }
            classname && Array.isArray(classname) && sourceEle.classList.add(...classname);
            userName && this.writeNewUserName(userId, userName);
          } else {
            sourceEle.textContent = Note_Obj.fn.getSourceUserId(userId, symbol);
            if (this.vm.settingsFrame.items.addNote.showNoteGroupColor && primaryColor) {
              sourceEle.style.setProperty('color', '');
            }
            if (!symbol.maskHover) {
              sourceEle.onmouseenter = '';
              sourceEle.onmouseleave = '';
            }
            if (title) {
              sourceEle.title = '';
            }
            classname && Array.isArray(classname) && sourceEle.classList.remove(...classname);
          }
        }
      } else {
        if (!restore && this.getUserTag(userId)) {
          ele.textContent = this.getUserTag(userId, symbol, true);
          if (this.vm.settingsFrame.items.addNote.showNoteGroupColor && primaryColor) {
            ele.style.setProperty('color', this.getPrimaryColor(userId), 'important');
          } else {
            ele.style.setProperty('color', '');
          }
          if (!symbol.maskHover) {
            ele.onmouseenter = event => {
              const x = Note_Obj.fn.getElementRight(event.target);
              const y = Note_Obj.fn.getElementBottom(event.target);
              Note_Obj.fn.debounce(() => {
                this.vm.popoverFrameAddUserId(userId, x + offsetWidth, y + offsetHeight);
              }, 1000);
            };
            ele.onmouseleave = _evnet => {
              Note_Obj.fn.debounce(() => {
                this.vm.popoverFrameHideEvent();
              }, 1000);
            };
          }
          if (title) {
            ele.title = userId;
          }
          classname && Array.isArray(classname) && ele.classList.add(...classname);
          userName && this.writeNewUserName(userId, userName);
        } else {
          ele.textContent = Note_Obj.fn.getSourceUserId(userId, symbol);
          if (this.vm.settingsFrame.items.addNote.showNoteGroupColor && primaryColor) {
            ele.style.setProperty('color', '');
          }
          if (!symbol.maskHover) {
            ele.onmouseenter = '';
            ele.onmouseleave = '';
          }
          if (title) {
            ele.title = userId;
          }
          classname && Array.isArray(classname) && ele.classList.remove(...classname);
        }
      }
    }
  }
  createNoteTag(userId, mode = null, type = 'span', classname = null, userName = null) {
    const noteTag = document.createElement(type);
    noteTag.className = 'note-obj-user-tag';
    const tag = this.getUserTag(userId, mode);
    const primaryColor = mode.primaryColor == null || mode.primaryColor == true;
    const secondaryColor = mode.secondaryColor == null || mode.secondaryColor == true;
    const offsetWidth = mode.offsetWidth || 0;
    const offsetHeight = mode.offsetHeight || 0;
    if (this.vm.settingsFrame.items.addNote.showNoteGroupColor) {
      if (primaryColor && secondaryColor) {
        noteTag.style.setProperty('background-color', this.getPrimaryColor(userId), 'important');
        noteTag.style.setProperty('color', this.getSecondaryColor(userId), 'important');
      } else if (primaryColor) {
        noteTag.style.setProperty('color', this.getPrimaryColor(userId), 'important');
      } else if (secondaryColor) {
        noteTag.style.setProperty('color', this.getSecondaryColor(userId), 'important');
      } else {
        noteTag.style.setProperty('background-color', '');
        noteTag.style.setProperty('color', '');
      }
    }
    if (classname && typeof classname === 'string') {
      classname = classname.split(/\s+/);
    }
    classname && Array.isArray(classname.filter(v => v)) && noteTag.classList.add(...classname);
    noteTag.textContent = tag;
    if (!mode.maskHover) {
      noteTag.onmouseenter = event => {
        const x = Note_Obj.fn.getElementRight(event.target);
        const y = Note_Obj.fn.getElementBottom(event.target);
        Note_Obj.fn.debounce(() => {
          this.vm.popoverFrameAddUserId(userId, x + offsetWidth, y + offsetHeight);
        }, 1000);
      };
      noteTag.onmouseleave = _evnet => {
        Note_Obj.fn.debounce(() => {
          this.vm.popoverFrameHideEvent();
        }, 1000);
      };
    }
    userName && this.writeNewUserName(userId, userName);
    return noteTag;
  }
  createNoteBtn(userId, userName = null, classname = null, type = 'div') {
    const noteBtn = document.createElement(type);
    noteBtn.className = 'note-obj-add-note-btn';
    if (classname && typeof classname === 'string') {
      classname = classname.split(/\s+/);
    }
    classname && Array.isArray(classname.filter(v => v)) && noteBtn.classList.add(...classname);
    noteBtn.title = this.lang.editTitle;
    noteBtn.addEventListener('click', event => {
      event.stopPropagation();
      this.vm.addFrameAddUser(userId, userName);
    });
    return noteBtn;
  }
  createSearchButton(classname = null, btnTitle = null) {
    const searchBtn = document.createElement('div');
    searchBtn.id = this.id + '_searchButton';
    searchBtn.className = 'note-obj-search-button';
    if (classname && typeof classname === 'string') {
      classname = classname.split(/\s+/);
    }
    classname && Array.isArray(classname.filter(v => v)) && searchBtn.classList.add(...classname);
    searchBtn.title = btnTitle == null ? this.lang.searchTagTitle : btnTitle;
    searchBtn.addEventListener('click', e => {
      e.stopPropagation();
      this.vm.searchFrame.isShow = true;
    });
    return searchBtn;
  }
}
Note_Obj.GM = {
  isError: false,
  menuCount: 0,
  error: message => {
    if (!Note_Obj.GM.isError) {
      Note_Obj.GM.isError = true;
      alert('The required ' + message + ' method is incomplete!!!');
    }
  },
  warn: message => {
    console.warn('The required ' + message + ' method is incomplete!!!');
  },
  tips: message => {
    console.info('Tips: ' + message);
  },
  info: () => {
    if (typeof GM_info === 'object') {
      return GM_info;
    } else if (typeof GM.info === 'object') {
      return GM.info;
    } else {
      Note_Obj.GM.warn('GM_info or GM.info');
      return {
        script: {
          version: 0,
        },
        scriptHandler: 'Unknown',
        version: 0,
      };
    }
  },
  getValue: (name, defaultValue) => {
    if (typeof GM_getValue === 'function') {
      return GM_getValue(name, defaultValue);
    } else if (typeof GM.getValue === 'function') {
      return GM.getValue(name, defaultValue);
    } else {
      Note_Obj.GM.error('GM_getValue or GM.getValue');
      return null;
    }
  },
  setValue: (name, value) => {
    if (typeof GM_setValue === 'function') {
      GM_setValue(name, value);
    } else if (typeof GM.setValue === 'function') {
      GM.setValue(name, value);
    } else {
      Note_Obj.GM.error('GM_setValue or GM.setValue');
    }
  },
  deleteValue: async name => {
    if (typeof GM_deleteValue === 'function') {
      await GM_deleteValue(name);
    } else if (typeof GM.deleteValue === 'function') {
      await GM.deleteValue(name);
    } else {
      Note_Obj.GM.error('GM_deleteValue or GM.deleteValue');
    }
  },
  listValues: () => {
    if (typeof GM_listValues === 'function') {
      return GM_listValues();
    } else if (typeof GM.listValues === 'function') {
      return GM.listValues();
    } else {
      Note_Obj.GM.error('GM_listValues or GM.listValues');
    }
  },
  openInTab: (url, options) => {
    if (typeof GM_openInTab === 'function') {
      GM_openInTab(url, options);
    } else if (typeof GM.openItTab === 'function') {
      GM.openInTab(url, options.active);
    } else {
      Note_Obj.GM.error('GM_openInTab or GM.openInTab');
    }
  },
  hasOpenIntTabMethods: () => {
    return typeof GM_openInTab === 'function' || typeof GM.openItTab === 'function';
  },
  hasRegisterMenuCommandMethods: () => {
    return typeof GM_registerMenuCommand === 'function';
  },
  hasAddValueChangeListenerMethods: () => {
    return typeof GM_addValueChangeListener === 'function';
  },
  registerMenuCommand: (name, fn) => {
    let menuId = null;
    if (typeof GM_registerMenuCommand === 'function') {
      if (Note_Obj.GM.info().scriptHandler === 'Violentmonkey') {
        Note_Obj.GM.menuCount++;
        GM_registerMenuCommand(Note_Obj.GM.menuCount + '.' + name, fn);
        menuId = Note_Obj.GM.menuCount + '.' + name;
      } else if (Note_Obj.GM.info().scriptHandler === 'Tampermonkey') {
        menuId = GM_registerMenuCommand(name, fn);
      }
    } else {
      Note_Obj.GM.warn('GM_registerMenuCommand');
    }
    return menuId;
  },
  unregisterMenuCommand: menuId => {
    if (typeof GM_unregisterMenuCommand === 'function') {
      GM_unregisterMenuCommand(menuId);
      if (Note_Obj.GM.info().scriptHandler === 'Violentmonkey') {
        Note_Obj.GM.menuCount--;
        if (Note_Obj.fn.compare('2.12.5', Note_Obj.GM.info().version)) {
          Note_Obj.GM.tips('Maybe you should update Violentmonkey to 2.12.5 or higher.');
        }
      }
    } else {
      Note_Obj.GM.warn('GM_unregisterMenuCommand');
    }
  },
  addValueChangeListener: (name, callback) => {
    if (typeof GM_addValueChangeListener === 'function') {
      return GM_addValueChangeListener(name, callback);
    } else {
      Note_Obj.GM.warn('GM_addValueChangeListener');
      return null;
    }
  },
  removeValueChangeListener: listenerId => {
    if (typeof GM_removeValueChangeListener === 'function') {
      GM_removeValueChangeListener(listenerId);
    } else {
      Note_Obj.GM.warn('GM_removeValueChangeListener');
    }
  },
  setClipboard: text => {
    if (typeof GM_setClipboard === 'function') {
      GM_setClipboard(text);
    } else if (typeof GM.setClipboard === 'function') {
      GM.setClipboard(text);
    } else {
      Note_Obj.GM.error('GM_setClipboard or GM.setClipboard');
    }
  },
};
Note_Obj.fn = {
  debounceTimer: null,
  throttleTimer: null,
  throttlePrevious: 0,
  isMobilePage: () => /android|webos|iphone|ipod|blackberry/i.test(navigator.userAgent),
  getUserIdFromLink: (link, comparisonCallback = null, replaceCallback = null) => {
    let userId = link.replace(window.location.origin + '/', '').replace(/\/$/, '');
    if (typeof replaceCallback === 'function' && replaceCallback(userId)) {
      userId = replaceCallback(userId);
    }
    if (typeof comparisonCallback === 'function' && !comparisonCallback(userId)) {
      userId = null;
    }
    return userId;
  },
  getSourceUserId: (userId, mode) => {
    const angle = mode.angle || mode.a ? true : false;
    const curly = mode.curly || mode.big || mode.b ? true : false;
    const square = mode.square || mode.medium || mode.m ? true : false;
    const parentheses = mode.parentheses || mode.small || mode.s ? true : false;
    const double = mode.double || mode.de || mode.d;
    const prefix = mode.prefix || mode.p;
    let value = '';
    if (userId) {
      value = userId;
      if (prefix) {
        value = prefix + value;
      }
      if (double) {
        value = double + value + double;
      }
      if (angle) {
        value = '<' + value + '>';
      } else if (curly) {
        value = '{' + value + '}';
      } else if (square) {
        value = '[' + value + ']';
      } else if (parentheses) {
        value = '(' + value + ')';
      }
    }
    return value;
  },
  downloadText: (content, filename = null, completed = null) => {
    if (!filename) {
      filename = 'no-name.txt';
    } else {
      filename = /\.(?:txt|text|json|config)$/i.test(filename) ? filename : filename + '.txt';
    }
    const urlObject = window.URL || window.webKitURL || window;
    const exportBlob = new Blob([content]);
    const saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    saveLink.href = urlObject.createObjectURL(exportBlob);
    saveLink.download = filename;
    const ev = new MouseEvent('click', {
      bubbles: true,
      cancelable: false,
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      button: 0,
      relatedTarget: null,
    });
    saveLink.dispatchEvent(ev);
    typeof completed === 'function' && completed();
  },
  openHyperlink: (url, ctrlKey, shiftKey) => {
    let hyperlink;
    if (typeof url === 'string') {
      hyperlink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
      hyperlink.href = url;
    } else {
      hyperlink = url;
    }
    const ev = new MouseEvent('click', {
      bubbles: true,
      cancelable: false,
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      ctrlKey: ctrlKey,
      altKey: false,
      shiftKey: shiftKey,
      metaKey: false,
      button: 0,
      relatedTarget: null,
    });
    hyperlink.dispatchEvent(ev);
  },
  openFile: callback => {
    const fileInput = document.createElementNS('http://www.w3.org/1999/xhtml', 'input');
    fileInput.id = 'noteObjFnOpenFileInput';
    fileInput.type = 'file';
    fileInput.accept = '.txt, .text, .json, .config';
    fileInput.style.display = 'none';
    fileInput.addEventListener('change', () => {
      if (!fileInput.value) {
        console.warn('No file selected.');
        return;
      }
      const file = fileInput.files[0];
      if (file.type != 'application/json' && file.type != 'application/xml' && file.type != 'text/plain') {
        console.warn('Not a valid file.');
        callback(false, 'valid');
        return;
      }
      const reader = new FileReader();
      reader.onload = function (e) {
        const data = e.target.result;
        callback(true, data);
        return;
      };
      reader.readAsText(file);
    });
    fileInput.click();
  },
  getElementLeft(ele) {
    return ele.getBoundingClientRect().left + document.documentElement.scrollLeft;
  },
  getElementRight(ele) {
    return ele.getBoundingClientRect().right + document.documentElement.scrollLeft;
  },
  getElementTop(ele) {
    return ele.getBoundingClientRect().top + document.documentElement.scrollTop;
  },
  getElementBottom(ele) {
    return ele.getBoundingClientRect().bottom + document.documentElement.scrollTop;
  },
  compare(str1, str2, symbol = '.', equal = false) {
    const arr1 = str1.split(symbol);
    const arr2 = str2.split(symbol);
    let compareStatus = false;
    const len = arr1.length < arr2.length ? arr1.length : arr2.length;
    for (let i = len - 1; i >= 0; i--) {
      if (Number(arr1[i]) > Number(arr2[i])) {
        compareStatus = true;
      } else if (equal && Number(arr1[i]) == Number(arr2[i])) {
        compareStatus = true;
      } else {
        compareStatus = false;
      }
    }
    return compareStatus;
  },
  debounce(func, delay, immediate = false) {
    let result;
    const debounced = function (...args) {
      Note_Obj.fn.debounceTimer && clearTimeout(Note_Obj.fn.debounceTimer);
      if (immediate) {
        const callNow = !Note_Obj.fn.debounceTimer;
        Note_Obj.fn.debounceTimer = setTimeout(() => {
          Note_Obj.fn.debounceTimer = null;
        }, delay);
        if (callNow) {
          result = func.apply(this, args);
        }
      } else {
        Note_Obj.fn.debounceTimer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      }
      return result;
    };
    debounced.cancel = function () {
      clearTimeout(Note_Obj.fn.debounceTimer);
      Note_Obj.fn.debounceTimer = null;
    };
    return debounced();
  },
  throttle(func, delay, options = {}) {
    let that, result;
    const throttled = function (...args) {
      const now = Date.now();
      if (!Note_Obj.fn.throttlePrevious && options.leading === false) {
        Note_Obj.fn.throttlePrevious = now;
      }
      const remaining = delay - (now - Note_Obj.fn.throttlePrevious);
      that = this;
      if (remaining <= 0 || remaining > delay) {
        if (Note_Obj.fn.throttleTimer) {
          clearTimeout(Note_Obj.fn.throttleTimer);
          Note_Obj.fn.throttleTimer = null;
        }
        Note_Obj.fn.throttlePrevious = now;
        result = func.apply(that, args);
        if (!Note_Obj.fn.throttleTimer) {
          that = args = null;
        }
      } else if (!Note_Obj.fn.throttleTimer && options.trailing !== false) {
        Note_Obj.fn.throttleTimer = setTimeout(() => {
          Note_Obj.fn.throttlePrevious = options.leading === false ? 0 : Date.now();
          Note_Obj.fn.throttleTimer = null;
          result = func.apply(that, args);
          if (!Note_Obj.fn.throttleTimer) {
            that = args = null;
          }
        }, remaining);
      }
      return result;
    };
    throttled.cancel = function () {
      clearTimeout(Note_Obj.fn.throttleTimer);
      Note_Obj.fn.throttlePrevious = 0;
      Note_Obj.fn.throttleTimer = null;
    };
    return throttled();
  },
  getVersion: () => NOTE_LANG.INFO.version,
  getUpdated: () => NOTE_LANG.INFO.updated,
};
