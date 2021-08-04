// ==UserScript==
// @name         downloadPic
// @namespace    https://greasyfork.org/zh-CN/users/193133-pana
// @homepage     https://greasyfork.org/zh-CN/users/193133-pana
// @version      7.2.6
// @description  DOWNLOAD_PIC
// @author       pana
// @license      GNU General Public License v3.0 or later
// ==/UserScript==

const DOWNLOAD_PIC = {
  SYMBOL: {
    UNDERLINE: '_',
    DIVIDE: '/',
  },
  TEXT: {
    DOWNLOAD: '下载原图',
    DOWNLOAD_ALL: '下载全部原图',
    VIEW: '查看原图',
    COMPLETED: '下载完成',
    PROCESSING: '下载中',
    CROP: '截取图片',
    CROP_COMPLETED: '截取完成',
  },
  STRING: {
    CLASS_NAME: 'download_pic',
    ALL_CLASS_NAME: 'download_all_pic',
    VIEW_CLASS_NAME: 'display_pic',
    CROP_CLASS_NAME: 'crop_pic',
    ID_NAME: 'the_download_pic',
  },
  REG: {
    NAME: /[^/]+\.(jpg|jpeg|png|bmp|gif)/i,
    EXTENSION: /\.(jpg|jpeg|png|bmp|gif)/i,
  },
  NUMBER: {
    CHROME_LIMIT: 10,
    SLEEP_UNIT: 2000,
    RESET_COUNT: 5,
    TIMEOUT: '2500',
  },
};
const COPY_TEXT = {
  TEXT: {
    LABEL: '复制文字',
    COMPLETED: '复制成功',
  },
  STRING: {
    CLASS_NAME: 'copyTextBtn',
  },
  REG: {
    CLEANING: /[\\/*?<>"|:]/g,
    SPACE: /^\s+|\s$/g,
  },
  NUMBER: {
    TIMEOUT: '2500',
  },
};
const DOWNLOAD_TEXT = {
  TEXT: {
    LABEL: '下载文字',
    COMPLETED: '下载完成',
  },
  STRING: {
    CLASS_NAME: 'downloadTextBtn',
  },
  NUMBER: {
    TIMEOUT: '2500',
  },
  REG: {
    EXTENSION: /\.(txt|nfo)$/i,
  },
};
const HIDE_PIC = {
  STRING: {
    CLASS_NAME: 'hidePicStr',
  },
  MODE_VALUE: {
    ALL: '11111',
    CLEAR: '00000',
    BASIC: '11001',
    COMMON: '00110',
  },
  COLOR: {
    P: '#777',
    TOO_WID: '#003399',
    LIMIT: '#CC3333',
  },
  SYMBOL: {
    LEFT_PARENTHESIS: '(',
    RIGHT_PARENTHESIS: ')',
    X: ' x ',
  },
  LIMIT_VALUE: {
    MIN_WIDTH: 1920,
    MIN_HEIGHT: 1080,
    ERROR: 10,
  },
};
class Button_Obj {
  constructor(textValue, notification, className) {
    this.textValue = textValue;
    this.notification = notification;
    this.className = className;
  }
  getTextValue() {
    return this.textValue;
  }
  getNotification() {
    return this.notification;
  }
  getClassName() {
    return this.className;
  }
  setNotification(notification) {
    this.notification = notification;
    return this;
  }
  setTextValue(textValue) {
    this.textValue = textValue;
    return this;
  }
  setClassName(className) {
    if (className) {
      this.className = className;
    }
    return this;
  }
  addClassName(className) {
    this.className = this.className + ' ' + className;
    return this;
  }
  typeofFunction(typeofValue) {
    if (typeofValue) {
      if (typeof typeofValue === 'function') {
        return true;
      } else {
        console.log(typeofValue + ' is not function.');
        return false;
      }
    } else {
      return false;
    }
  }
  typeofJQuery() {
    if (typeof jQuery === 'function') {
      return Number(/^\d+\.\d+/i.exec(jQuery.fn.jquery)[0]);
    } else {
      console.log('jQuery is not imported.');
      return 0;
    }
  }
  typeofChrome() {
    return navigator.userAgent.indexOf('Chrome') !== -1;
  }
  typeofFirefox() {
    return navigator.userAgent.indexOf('Firefox') !== -1;
  }
  sleep(ms, callback) {
    const that = this;
    setTimeout(function () {
      console.log(ms / 1000 + ' second later.');
      if (that.typeofFunction(callback)) {
        callback();
      }
    }, ms);
  }
  setButtonStyle(button, styleValue) {
    if (typeof styleValue === 'string') {
      button.setAttribute('style', styleValue);
    } else if (typeof styleValue === 'object') {
      if (this.typeofJQuery() >= 1.9) {
        jQuery(button).css(styleValue);
      } else {
        let styleString = '';
        for (let key in styleValue) {
          styleString += key + ': ' + styleValue[key] + '; ';
        }
        button.setAttribute('style', styleString);
      }
    } else {
      console.log('styleValue is ' + typeof styleValue);
    }
  }
  setMouseEvent(button, hoverOver, hoverOut) {
    if (this.typeofJQuery() > 0) {
      if (this.typeofFunction(hoverOver) && this.typeofFunction(hoverOut)) {
        jQuery(button).hover(hoverOver, hoverOut);
      }
    } else {
      button.addEventListener('mouseover', hoverOver, false);
      button.addEventListener('mouseout', hoverOut, false);
    }
  }
  createBtn(targetValue, buttonTitle, cssValue, hoverOver, hoverOut) {
    const button = document.createElement('a');
    button.target = targetValue;
    button.title = buttonTitle;
    button.href = 'javascript:;';
    button.className = this.className;
    button.innerText = this.textValue;
    if (cssValue) {
      this.setButtonStyle(button, cssValue);
    }
    if (hoverOver && hoverOut) {
      this.setMouseEvent(button, hoverOver, hoverOut);
    }
    return button;
  }
}
class Download_Pic_Obj extends Button_Obj {
  constructor(
    downloadAddress = '',
    countValue = -1,
    filename = '',
    textValue = DOWNLOAD_PIC.TEXT.DOWNLOAD,
    notification = false,
    className = DOWNLOAD_PIC.STRING.CLASS_NAME
  ) {
    super(textValue, notification, className);
    this.countValue = countValue;
    this.downloadAddress = downloadAddress;
    if (filename === '' || filename === undefined || filename === null) {
      if (DOWNLOAD_PIC.REG.NAME.exec(downloadAddress)) {
        this.filename = DOWNLOAD_PIC.REG.NAME.exec(downloadAddress)[0];
      } else {
        this.filename = 'no-name.jpg';
      }
    } else {
      let tempFilename = '';
      let tempExt = '';
      if (DOWNLOAD_PIC.REG.EXTENSION.test(filename)) {
        tempExt = DOWNLOAD_PIC.REG.EXTENSION.exec(filename)[0];
        tempFilename = filename.replace(tempExt, '');
      } else {
        tempExt = '.jpg';
        tempFilename = filename;
      }
      if (countValue > -1) {
        if (DOWNLOAD_PIC.REG.EXTENSION.exec(downloadAddress)) {
          this.filename = tempFilename + DOWNLOAD_PIC.SYMBOL.UNDERLINE + countValue + DOWNLOAD_PIC.REG.EXTENSION.exec(downloadAddress)[0];
        } else {
          this.filename = tempFilename + DOWNLOAD_PIC.SYMBOL.UNDERLINE + countValue + tempExt;
        }
      } else {
        if (DOWNLOAD_PIC.REG.EXTENSION.exec(downloadAddress)) {
          this.filename = tempFilename + DOWNLOAD_PIC.REG.EXTENSION.exec(downloadAddress)[0];
        } else {
          this.filename = tempFilename + tempExt;
        }
      }
    }
    this.errorResetCount = DOWNLOAD_PIC.NUMBER.RESET_COUNT;
  }
  getDownloadAddress() {
    return this.downloadAddress;
  }
  getCountValue() {
    return this.countValue;
  }
  getFilename() {
    return this.filename;
  }
  setFilename(filename = '') {
    if (filename === '' || filename === undefined || filename === null) {
      if (DOWNLOAD_PIC.REG.NAME.exec(this.downloadAddress)) {
        this.filename = DOWNLOAD_PIC.REG.NAME.exec(this.downloadAddress)[0];
      } else {
        this.filename = 'no-name.jpg';
      }
    } else {
      let tempFilename = '';
      let tempExt = '';
      if (DOWNLOAD_PIC.REG.EXTENSION.test(filename)) {
        tempExt = DOWNLOAD_PIC.REG.EXTENSION.exec(filename)[0];
        tempFilename = filename.replace(tempExt, '');
      } else {
        tempExt = '.jpg';
        tempFilename = filename;
      }
      if (this.countValue > -1) {
        if (DOWNLOAD_PIC.REG.EXTENSION.exec(this.downloadAddress)) {
          this.filename =
            tempFilename + DOWNLOAD_PIC.SYMBOL.UNDERLINE + this.countValue + DOWNLOAD_PIC.REG.EXTENSION.exec(this.downloadAddress)[0];
        } else {
          this.filename = tempFilename + DOWNLOAD_PIC.SYMBOL.UNDERLINE + this.countValue + tempExt;
        }
      } else {
        if (DOWNLOAD_PIC.REG.EXTENSION.exec(this.downloadAddress)) {
          this.filename = tempFilename + DOWNLOAD_PIC.REG.EXTENSION.exec(this.downloadAddress)[0];
        } else {
          this.filename = tempFilename + tempExt;
        }
      }
    }
    return this;
  }
  setDownloadAddress(downloadAddress = '', countValue = -1, filename = '') {
    this.downloadAddress = downloadAddress;
    this.countValue = countValue;
    if (filename === '' || filename === undefined || filename === null) {
      if (DOWNLOAD_PIC.REG.NAME.exec(downloadAddress)) {
        this.filename = DOWNLOAD_PIC.REG.NAME.exec(downloadAddress)[0];
      } else {
        this.filename = 'no-name.jpg';
      }
    } else {
      let tempFilename = '';
      let tempExt = '';
      if (DOWNLOAD_PIC.REG.EXTENSION.test(filename)) {
        tempExt = DOWNLOAD_PIC.REG.EXTENSION.exec(filename)[0];
        tempFilename = filename.replace(tempExt, '');
      } else {
        tempExt = '.jpg';
        tempFilename = filename;
      }
      if (this.countValue > -1) {
        if (DOWNLOAD_PIC.REG.EXTENSION.exec(downloadAddress)) {
          this.filename =
            tempFilename + DOWNLOAD_PIC.SYMBOL.UNDERLINE + this.countValue + DOWNLOAD_PIC.REG.EXTENSION.exec(downloadAddress)[0];
        } else {
          this.filename = tempFilename + DOWNLOAD_PIC.SYMBOL.UNDERLINE + this.countValue + tempExt;
        }
      } else {
        if (DOWNLOAD_PIC.REG.EXTENSION.exec(downloadAddress)) {
          this.filename = tempFilename + DOWNLOAD_PIC.REG.EXTENSION.exec(downloadAddress)[0];
        } else {
          this.filename = tempFilename + tempExt;
        }
      }
    }
    return this;
  }
  createDownloadBtn(downloadStart, saveFile, updateProgressCallback, transferComplete, cssValue, hoverOver, hoverOut) {
    const downloadBtn = this.createBtn('_self', DOWNLOAD_PIC.TEXT.DOWNLOAD, cssValue, hoverOver, hoverOut);
    downloadBtn.id = this.className + DOWNLOAD_PIC.SYMBOL.UNDERLINE + this.countValue;
    if (arguments.length > 0) {
      const that = this;
      if (this.typeofJQuery() >= 1.7) {
        jQuery(downloadBtn).on('click', function (event) {
          event.stopPropagation();
          that.downloadHandle(downloadStart, saveFile, updateProgressCallback, transferComplete, this);
        });
      } else {
        downloadBtn.addEventListener('click', function (event) {
          event.stopPropagation();
          that.downloadHandle(downloadStart, saveFile, updateProgressCallback, transferComplete, this);
        });
      }
    }
    downloadBtn.downloadStarted = function () {
      this.title = DOWNLOAD_PIC.TEXT.PROCESSING;
    };
    downloadBtn.downloadCompleted = function () {
      this.title = DOWNLOAD_PIC.TEXT.COMPLETED;
    };
    return downloadBtn;
  }
  downloadFile(saveFile, updateProgressCallback, transferComplete, btn) {
    const that = this;
    if (typeof GM_download === 'function') {
      const downloadDetails = {
        url: that.downloadAddress,
        name: that.filename,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        onprogress: function (evt) {
          that.updateProgress(evt, updateProgressCallback, btn);
        },
        onload: function () {
          if (that.typeofFunction(transferComplete)) {
            transferComplete.call(that, that.countValue, btn);
          }
          that.completedNotification();
          console.log('image download completed: ' + that.downloadAddress);
        },
        onerror: function (res) {
          if (that.resetDownloadEvent()) {
            that.downloadFile('', updateProgressCallback, transferComplete, btn);
          } else {
            try {
              switch (res.error) {
                case 'not_enabled':
                  console.log('错误原因: 用户未启用下载功能。');
                  break;
                case 'not_whitelisted':
                  console.log('错误原因: 请求的文件扩展名未列入白名单。');
                  break;
                case 'not_permitted':
                  console.log('错误原因: 用户启用了下载功能，但未授予下载权限');
                  break;
                case 'not_supported':
                  console.log('错误原因: 浏览器/版本不支持下载功能。');
                  break;
                case 'not_succeeded':
                  console.log('错误原因: 下载未启动或失败，详细信息属性可能提供更多信息。');
                  break;
                default:
                  console.log('错误原因: 未知。');
                  break;
              }
              console.log(res.details);
            } catch (e) {
              console.log(e);
            }
          }
        },
      };
      GM_download(downloadDetails);
    } else {
      console.log('GM_download is undefined.');
      if (typeof GM_xmlhttpRequest === 'function') {
        const xhrDetails = {
          method: 'GET',
          url: that.downloadAddress,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          responseType: 'blob',
          onprogress: function (evt) {
            that.updateProgress(evt, updateProgressCallback, btn);
          },
          onload: function (res) {
            if (res.status === 200) {
              if (that.typeofFunction(saveFile)) {
                saveFile(res.response, that.filename);
              } else {
                console.log('saveFile is undefined.');
              }
              if (that.typeofFunction(transferComplete)) {
                transferComplete.call(that, that.countValue, btn);
              }
              that.completedNotification();
              console.log('image download completed: ' + that.downloadAddress);
            } else {
              console.log('response status: ' + res.status);
            }
          },
          onerror: function () {
            if (that.resetDownloadEvent()) {
              that.downloadFile(saveFile, updateProgressCallback, transferComplete, btn);
            } else {
              console.log('image download error: ' + that.downloadAddress);
            }
          },
        };
        GM_xmlhttpRequest(xhrDetails);
      } else {
        console.log('GM_xmlhttpRequest is undefined.');
        const xhr = new XMLHttpRequest();
        xhr.addEventListener(
          'progress',
          function (evt) {
            that.updateProgress(evt, updateProgressCallback, btn);
          },
          false
        );
        xhr.open('GET', that.downloadAddress, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
          if (xhr.status === 200) {
            if (that.typeofFunction(saveFile)) {
              saveFile(xhr.response, that.filename);
            } else {
              console.log('saveFile is undefined.');
            }
            if (that.typeofFunction(transferComplete)) {
              transferComplete.call(that, that.countValue, btn);
            }
            that.completedNotification();
            console.log('image download completed: ' + that.downloadAddress);
          } else {
            console.log('response status: ' + xhr.status);
          }
        };
        xhr.onerror = function () {
          if (that.resetDownloadEvent()) {
            that.downloadFile(saveFile, updateProgressCallback, transferComplete, btn);
          } else {
            console.log('image download error: ' + that.downloadAddress);
          }
        };
        xhr.send();
      }
    }
  }
  resetDownloadEvent() {
    if (this.errorResetCount > 0) {
      this.errorResetCount--;
      return true;
    } else {
      return false;
    }
  }
  updateProgress(evt, updateProgressCallback, btn) {
    if (evt.lengthComputable) {
      const percentComplete = Math.round((evt.loaded * 100) / evt.total);
      if (this.typeofFunction(updateProgressCallback)) {
        updateProgressCallback.call(this, this.countValue, percentComplete, btn);
      }
    }
  }
  completedNotification() {
    if (this.notification) {
      if (typeof GM_notification === 'function') {
        const notificationDetails = {
          text: this.filename,
          title: DOWNLOAD_PIC.TEXT.COMPLETED,
          timeout: DOWNLOAD_PIC.NUMBER.TIMEOUT,
        };
        GM_notification(notificationDetails);
      } else {
        console.log('GM_notification is undefined.');
      }
    }
  }
  downloadHandle(downloadStart, saveFile, updateProgressCallback, transferComplete, btn) {
    if (this.typeofFunction(downloadStart)) {
      downloadStart.call(this, this.countValue, btn);
    }
    this.downloadFile(saveFile, updateProgressCallback, transferComplete, btn);
  }
}
class Download_All_Pic_Obj extends Button_Obj {
  constructor(
    idName = DOWNLOAD_PIC.STRING.ID_NAME,
    filename = '',
    textValue = DOWNLOAD_PIC.TEXT.DOWNLOAD_ALL,
    notification = false,
    className = DOWNLOAD_PIC.STRING.ALL_CLASS_NAME
  ) {
    super(textValue, notification, className);
    this.filename = filename;
    this.idName = idName;
  }
  getIdName() {
    return this.idName;
  }
  getFilename() {
    return this.filename;
  }
  setIdName(idName = DOWNLOAD_PIC.STRING.ID_NAME) {
    if (idName) {
      this.idName = idName;
    }
    return this;
  }
  setFilename(filename = '') {
    this.filename = filename;
    return this;
  }
  createDownloadBtn(classNameArgs, cssValue, hoverOver, hoverOut) {
    const downloadAllBtn = this.createBtn('_self', DOWNLOAD_PIC.TEXT.DOWNLOAD_ALL, cssValue, hoverOver, hoverOut);
    downloadAllBtn.id = this.idName;
    if (typeof classNameArgs === 'string') {
      if (!classNameArgs) {
        console.error('classNameArgs is error.');
        return downloadAllBtn;
      }
    } else {
      classNameArgs = DOWNLOAD_PIC.STRING.CLASS_NAME;
    }
    const that = this;
    if (classNameArgs) {
      if (this.typeofJQuery() >= 1.7) {
        jQuery(downloadAllBtn).on('click', function (event) {
          event.stopPropagation();
          const downloadBtnObj = jQuery('.' + classNameArgs);
          for (let i = 0; i < downloadBtnObj.length; i++) {
            if (that.typeofChrome()) {
              const parseI = parseInt(i / DOWNLOAD_PIC.NUMBER.CHROME_LIMIT);
              if (parseI > 0) {
                that.sleep(parseI * DOWNLOAD_PIC.NUMBER.SLEEP_UNIT, function () {
                  downloadBtnObj.eq(i)[0].click();
                });
                continue;
              }
            }
            downloadBtnObj.eq(i)[0].click();
          }
        });
      } else {
        downloadAllBtn.addEventListener('click', function (event) {
          event.stopPropagation();
          const downloadBtnDom = document.getElementsByClassName(classNameArgs);
          for (let j = 0; j < downloadBtnDom.length; j++) {
            if (that.typeofChrome()) {
              const parseJ = parseInt(j / DOWNLOAD_PIC.NUMBER.CHROME_LIMIT);
              if (parseJ > 0) {
                that.sleep(parseJ * DOWNLOAD_PIC.NUMBER.SLEEP_UNIT, function () {
                  downloadBtnDom[j].click();
                });
                continue;
              }
            }
            downloadBtnDom[j].click();
          }
        });
      }
    }
    downloadAllBtn.downloadStarted = function () {
      this.title = DOWNLOAD_PIC.TEXT.PROCESSING;
    };
    downloadAllBtn.downloadCompleted = function () {
      this.title = DOWNLOAD_PIC.TEXT.COMPLETED;
    };
    return downloadAllBtn;
  }
  createDownloadAllBtn(arrayArgs, downloadStart, saveFile, updateProgressCallback, transferComplete, cssValue, hoverOver, hoverOut) {
    const downloadAllBtn = this.createBtn('_self', DOWNLOAD_PIC.TEXT.DOWNLOAD_ALL, cssValue, hoverOver, hoverOut);
    downloadAllBtn.id = this.idName;
    if (typeof arrayArgs === 'object') {
      const tempObjArray = [];
      for (let k = 0; k < arrayArgs.length; k++) {
        const tempObj = new Download_Pic_Obj(arrayArgs[k], k + 1, this.filename);
        tempObjArray.push(tempObj);
      }
      const that = this;
      if (this.typeofJQuery() >= 1.7) {
        jQuery(downloadAllBtn).on('click', function (event) {
          event.stopPropagation();
          for (let l = 0; l < tempObjArray.length; l++) {
            if (that.typeofChrome()) {
              const parseL = parseInt(l / DOWNLOAD_PIC.NUMBER.CHROME_LIMIT);
              if (parseL > 0) {
                that.sleep(parseL * DOWNLOAD_PIC.NUMBER.SLEEP_UNIT, function () {
                  tempObjArray[l].downloadHandle(downloadStart, saveFile, updateProgressCallback, transferComplete);
                });
                continue;
              }
            }
            tempObjArray[l].downloadHandle(downloadStart, saveFile, updateProgressCallback, transferComplete);
          }
        });
      } else {
        downloadAllBtn.addEventListener('click', function (event) {
          event.stopPropagation();
          for (let m = 0; m < tempObjArray.length; m++) {
            if (that.typeofChrome()) {
              const parseM = parseInt(m / DOWNLOAD_PIC.NUMBER.CHROME_LIMIT);
              if (parseM > 0) {
                that.sleep(parseM * DOWNLOAD_PIC.NUMBER.SLEEP_UNIT, function () {
                  tempObjArray[m].downloadHandle(downloadStart, saveFile, updateProgressCallback, transferComplete);
                });
                continue;
              }
            }
            tempObjArray[m].downloadHandle(downloadStart, saveFile, updateProgressCallback, transferComplete);
          }
        });
      }
    } else {
      console.log('arrayArgs is error.');
    }
    downloadAllBtn.downloadStarted = function () {
      this.title = DOWNLOAD_PIC.TEXT.PROCESSING;
    };
    downloadAllBtn.downloadCompleted = function () {
      this.title = DOWNLOAD_PIC.TEXT.COMPLETED;
    };
    return downloadAllBtn;
  }
}
class Display_Pic_Obj extends Button_Obj {
  constructor(picLink = '', textValue = DOWNLOAD_PIC.TEXT.VIEW, notification = false, className = DOWNLOAD_PIC.STRING.VIEW_CLASS_NAME) {
    super(textValue, notification, className);
    this.picLink = picLink;
  }
  getPicLink() {
    return this.picLink;
  }
  setPicLink(picLink = '') {
    if (picLink) {
      this.picLink = picLink;
    }
    return this;
  }
  createDisplayBtn(cssValue, hoverOver, hoverOut, displayStart) {
    const displayBtn = this.createBtn('_blank', DOWNLOAD_PIC.TEXT.VIEW, cssValue, hoverOver, hoverOut);
    displayBtn.href = this.picLink;
    if (arguments.length === 4) {
      const that = this;
      if (this.typeofFunction(displayStart)) {
        if (this.typeofJQuery() >= 1.7) {
          jQuery(displayBtn).on('mousedown', function (event) {
            event.stopPropagation();
            displayStart.call(that, this);
          });
        } else {
          displayBtn.addEventListener('mousedown', function (event) {
            event.stopPropagation();
            displayStart.call(that, this);
          });
        }
      }
    }
    return displayBtn;
  }
  displayHandle(displayStart) {
    if (this.typeofFunction(displayStart)) {
      displayStart.call(this);
    }
    window.open(this.picLink);
  }
}
class Crop_Pic_Obj extends Button_Obj {
  constructor(
    imageObject = '',
    startX = 0,
    startY = 0,
    cropWidth = 0,
    cropHeight = 0,
    ratio = 1,
    filename = '',
    textValue = DOWNLOAD_PIC.TEXT.CROP,
    notification = true,
    className = DOWNLOAD_PIC.STRING.CROP_CLASS_NAME
  ) {
    super(textValue, notification, className);
    this.imageObject = imageObject;
    this.startX = startX;
    this.startY = startY;
    this.cropWidth = cropWidth;
    this.cropHeight = cropHeight;
    this.ratio = ratio;
    this.filename = filename;
  }
  getImageObject() {
    return this.imageObject;
  }
  getStartX() {
    return this.startX;
  }
  getStartY() {
    return this.startY;
  }
  getCropWidth() {
    return this.cropWidth;
  }
  getCropHeight() {
    return this.cropHeight;
  }
  getRatio() {
    return this.ratio;
  }
  getFilename() {
    return this.filename;
  }
  setImageObject(imageObject = '') {
    this.imageObject = imageObject;
    return this;
  }
  setStartX(startX = 0) {
    this.startX = startX;
    return this;
  }
  setStartY(startY = 0) {
    this.startY = startY;
    return this;
  }
  setCropWidth(cropWidth = 0) {
    this.cropWidth = cropWidth;
    return this;
  }
  setCropHeight(cropHeight = 0) {
    this.cropHeight = cropHeight;
    return this;
  }
  setRatio(ratio = 1) {
    this.ratio = ratio;
    return this;
  }
  setFilename(filename = '') {
    this.filename = filename;
    return this;
  }
  createCropBtn(cssValue, cropCompleted, saveFile, hoverOver, hoverOut) {
    const cropBtn = this.createBtn('_self', DOWNLOAD_PIC.TEXT.CROP, cssValue, hoverOver, hoverOut);
    const that = this;
    if (this.typeofJQuery() >= 1.7) {
      jQuery(cropBtn).on('click', function (event) {
        event.stopPropagation();
        that.cropHandle(cropCompleted, saveFile, this);
      });
    } else {
      cropBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        that.cropHandle(cropCompleted, saveFile, this);
      });
    }
    cropBtn.cropCompleted = function () {
      this.title = DOWNLOAD_PIC.TEXT.CROP_COMPLETED;
    };
    return cropBtn;
  }
  cropHandle(cropCompleted, saveFile, btn) {
    const that = this;
    const picTimer = setInterval(function () {
      if (that.imageObject.complete) {
        const tnCanvas = document.createElement('canvas');
        const tnCanvasContext = tnCanvas.getContext('2d');
        const useCropWidth = that.cropWidth === 0 ? that.imageObject.naturalWidth - that.startX : that.cropWidth;
        const useCropHeight = that.cropHeight === 0 ? that.imageObject.naturalHeight - that.startY : that.cropHeight;
        const canvasWidth = useCropWidth * that.ratio;
        const canvasHeight = useCropHeight * that.ratio;
        tnCanvas.width = canvasWidth;
        tnCanvas.height = canvasHeight;
        tnCanvasContext.drawImage(that.imageObject, that.startX, that.startY, useCropWidth, useCropHeight, 0, 0, canvasWidth, canvasHeight);
        const downloadImageObj = new Download_Pic_Obj(tnCanvas.toDataURL(), -1, that.filename, '', that.notification);
        downloadImageObj.downloadHandle('', saveFile, '', cropCompleted, btn);
        if (typeof GM_download === 'function') {
          if (that.typeofFunction(cropCompleted)) {
            cropCompleted.call(that, -1, btn);
          }
          if (that.notification) {
            if (typeof GM_notification === 'function') {
              const notificationDetails = {
                text: that.filename,
                title: DOWNLOAD_PIC.TEXT.CROP_COMPLETED,
                timeout: DOWNLOAD_PIC.NUMBER.TIMEOUT,
              };
              GM_notification(notificationDetails);
            } else {
              console.log('GM_notification is undefined.');
            }
          }
          console.log('image download completed: ' + that.filename);
        }
        clearInterval(picTimer);
      }
    }, 50);
  }
}
class Copy_Text_Obj extends Button_Obj {
  constructor(
    copyText,
    textValue = COPY_TEXT.TEXT.LABEL,
    clearStatus = false,
    notification = true,
    className = COPY_TEXT.STRING.CLASS_NAME
  ) {
    super(textValue, notification, className);
    this.clearStatus = clearStatus;
    if (clearStatus) {
      copyText = copyText.replace(COPY_TEXT.REG.CLEANING, ' ');
      copyText = copyText.replace(COPY_TEXT.REG.SPACE, '');
    }
    this.copyText = copyText;
  }
  getCopyText() {
    return this.copyText;
  }
  setCopyText(copyText) {
    if (this.clearStatus) {
      copyText = copyText.replace(COPY_TEXT.REG.CLEANING, ' ');
      copyText = copyText.replace(COPY_TEXT.REG.SPACE, '');
    }
    this.copyText = copyText;
    return this;
  }
  createCopyBtn(cssValue, copyCompleted, hoverOver, hoverOut) {
    const copyBtn = this.createBtn('_self', COPY_TEXT.TEXT.LABEL, cssValue, hoverOver, hoverOut);
    const that = this;
    if (this.typeofJQuery() >= 1.7) {
      jQuery(copyBtn).on('click', function (event) {
        event.stopPropagation();
        that.copyHandle(copyCompleted, this);
      });
    } else {
      copyBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        that.copyHandle(copyCompleted, this);
      });
    }
    copyBtn.copyCompleted = function () {
      this.title = COPY_TEXT.TEXT.COMPLETED;
    };
    return copyBtn;
  }
  copyHandle(copyCompleted, btn) {
    if (typeof GM_setClipboard === 'function') {
      GM_setClipboard(this.copyText, 'text');
    } else {
      console.log('GM_setClipboard is undefined.');
      const oInput = document.createElement('input');
      oInput.value = this.copyText;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand('Copy'); // 执行浏览器复制命令
      oInput.className = 'oInput';
      oInput.style.display = 'none';
    }
    if (this.notification) {
      if (typeof GM_notification === 'function') {
        const notificationDetails = {
          text: this.copyText,
          title: COPY_TEXT.TEXT.COMPLETED,
          timeout: COPY_TEXT.NUMBER.TIMEOUT,
        };
        GM_notification(notificationDetails);
      } else {
        console.log('GM_notification is undefined.');
      }
    }
    if (this.typeofFunction(copyCompleted)) {
      copyCompleted.call(this, btn);
    }
  }
}
class Download_Text_Obj extends Button_Obj {
  constructor(
    downloadText = '',
    filename = '',
    textValue = DOWNLOAD_TEXT.TEXT.LABEL,
    notification = true,
    className = DOWNLOAD_TEXT.STRING.CLASS_NAME
  ) {
    super(textValue, notification, className);
    if (filename === '' || filename === undefined || filename === null) {
      this.filename = 'no-name.txt';
    } else {
      if (DOWNLOAD_TEXT.REG.EXTENSION.test(filename)) {
        this.filename = filename;
      } else {
        this.filename = filename + '.txt';
      }
    }
    this.downloadText = downloadText;
  }
  getDownloadText() {
    return this.downloadText;
  }
  getFilename() {
    return this.filename;
  }
  setDownloadText(downloadText = '') {
    this.downloadText = downloadText;
    return this;
  }
  setFilename(filename = '') {
    if (filename === '' || filename === undefined || filename === null) {
      this.filename = 'no-name.txt';
    } else {
      if (DOWNLOAD_TEXT.REG.EXTENSION.test(filename)) {
        this.filename = filename;
      } else {
        this.filename = filename + '.txt';
      }
    }
    return this;
  }
  createDownloadBtn(cssValue, downloadStart, downloadCompleted, hoverOver, hoverOut) {
    const downloadBtn = this.createBtn('_self', DOWNLOAD_TEXT.TEXT.LABEL, cssValue, hoverOver, hoverOut);
    const that = this;
    if (this.typeofJQuery() >= 1.7) {
      jQuery(downloadBtn).on('click', function (event) {
        event.stopPropagation();
        that.downloadHandle(downloadStart, downloadCompleted, this);
      });
    } else {
      downloadBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        that.downloadHandle(downloadStart, downloadCompleted, this);
      });
    }
    downloadBtn.downloadCompleted = function () {
      this.title = DOWNLOAD_TEXT.TEXT.COMPLETED;
    };
    return downloadBtn;
  }
  downloadHandle(downloadStart, downloadCompleted, btn) {
    if (this.typeofFunction(downloadStart)) {
      downloadStart.call(this, btn);
    }
    const urlObject = window.URL || window.webkitURL || window;
    const exportBlob = new Blob([this.downloadText]);
    const saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    saveLink.href = urlObject.createObjectURL(exportBlob);
    saveLink.download = this.filename;
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
    if (this.notification) {
      if (typeof GM_notification === 'function') {
        const notificationDetails = {
          text: this.filename,
          title: DOWNLOAD_TEXT.TEXT.COMPLETED,
          timeout: DOWNLOAD_TEXT.NUMBER.TIMEOUT,
        };
        GM_notification(notificationDetails);
      } else {
        console.log('GM_notification is undefined.');
      }
    }
    if (this.typeofFunction(downloadCompleted)) {
      downloadCompleted.call(this, btn);
    }
  }
}
class Hide_Pic_Obj extends Button_Obj {
  constructor(
    modeValue = HIDE_PIC.MODE_VALUE.ALL,
    printEnable = true,
    textValue = '',
    notification = false,
    className = HIDE_PIC.STRING.CLASS_NAME
  ) {
    super(textValue, notification, className);
    this.modeValue = modeValue.padEnd(5, '0');
    this.printEnable = printEnable;
  }
  getModeValue() {
    return this.modeValue;
  }
  setModeValue(modeValue = HIDE_PIC.MODE_VALUE.CLEAR) {
    this.modeValue = modeValue.padEnd(5, '0');
    return this;
  }
  getPrintEnable() {
    return this.printEnable;
  }
  setPrintEnable(printEnable) {
    this.printEnable = printEnable;
    return this;
  }
  judgeMode(modeNumber) {
    if (this.modeValue[modeNumber] === '1') {
      return true;
    } else {
      return false;
    }
  }
  filterDecimal(pixels) {
    if (typeof pixels === 'number') {
      return Math.floor(pixels);
    } else if (typeof pixels === 'string') {
      return Number(pixels.replace(/\.\d*$/i, ''));
    } else {
      console.log('pixels is ' + typeof pixels);
      return 0;
    }
  }
  judgeTipStrStatus(widthValue, heightValue, widthLimit, heightLimit) {
    if (this.judgeMode(0) && this.filterDecimal(widthValue) < this.filterDecimal(heightValue)) {
      return 1;
    } else if (this.judgeMode(1) && this.filterDecimal(widthValue) / 16 - 1 > this.filterDecimal(heightValue) / 9) {
      return 2;
    } else if (
      this.judgeMode(2) &&
      this.judgeMode(3) &&
      this.filterDecimal(widthValue) < this.filterDecimal(widthLimit) &&
      this.filterDecimal(heightValue) < this.filterDecimal(heightLimit)
    ) {
      return 3;
    } else if (this.judgeMode(2) && this.filterDecimal(widthValue) < this.filterDecimal(widthLimit)) {
      return 4;
    } else if (this.judgeMode(3) && this.filterDecimal(heightValue) < this.filterDecimal(heightLimit)) {
      return 5;
    } else if (this.judgeMode(4) && this.filterDecimal(widthValue) == this.filterDecimal(heightValue)) {
      return 6;
    } else {
      return 0;
    }
  }
  resetImgUrl(imgObj, imgSrc, maxErrorNum) {
    if (maxErrorNum > 0) {
      const that = this;
      imgObj.onerror = function () {
        console.log('image load error: ' + imgSrc + '\nreset count: ' + (HIDE_PIC.LIMIT_VALUE.ERROR + 2 - maxErrorNum));
        that.resetImgUrl(imgObj, imgSrc, maxErrorNum - 1);
      };
      this.sleep(500, function () {
        imgObj.src = imgSrc;
      });
    } else {
      imgObj.onerror = null;
    }
  }
  hideTipStrForPix(parentDom, widthValue, heightValue, widthLimit, heightLimit, callback, answerCallback) {
    let status = false;
    if (widthValue !== 0 || heightValue !== 0) {
      if (typeof parentDom === 'object') {
        if (parentDom.style.display !== 'none') {
          const tipStatus = this.judgeTipStrStatus(widthValue, heightValue, widthLimit, heightLimit);
          if (tipStatus !== 0) {
            status = true;
            parentDom.style.display = 'none';
            if (this.printEnable) {
              const tipStr = document.createElement('p');
              tipStr.className = this.className;
              const leftParenthesis = document.createElement('span');
              leftParenthesis.innerText = HIDE_PIC.SYMBOL.LEFT_PARENTHESIS;
              tipStr.appendChild(leftParenthesis);
              const widthSpan = document.createElement('span');
              widthSpan.innerText = this.filterDecimal(widthValue);
              tipStr.appendChild(widthSpan);
              const symbolSpan = document.createElement('span');
              symbolSpan.innerText = HIDE_PIC.SYMBOL.X;
              tipStr.appendChild(symbolSpan);
              const heightSpan = document.createElement('span');
              heightSpan.innerText = this.filterDecimal(heightValue);
              tipStr.appendChild(heightSpan);
              const rightParenthesis = document.createElement('span');
              rightParenthesis.innerText = HIDE_PIC.SYMBOL.RIGHT_PARENTHESIS;
              tipStr.appendChild(rightParenthesis);
              if (tipStatus === 1) {
                tipStr.style.color = HIDE_PIC.COLOR.P;
              } else if (tipStatus === 2) {
                tipStr.style.color = HIDE_PIC.COLOR.TOO_WID;
              } else if (tipStatus === 3) {
                widthSpan.style.color = HIDE_PIC.COLOR.LIMIT;
                heightSpan.style.color = HIDE_PIC.COLOR.LIMIT;
              } else if (tipStatus === 4) {
                widthSpan.style.color = HIDE_PIC.COLOR.LIMIT;
              } else if (tipStatus === 5) {
                heightSpan.style.color = HIDE_PIC.COLOR.LIMIT;
              } else if (tipStatus === 6) {
                tipStr.style.color = HIDE_PIC.COLOR.P;
              }
              parentDom.after(tipStr);
            }
            if (this.typeofFunction(answerCallback)) {
              answerCallback();
            }
          }
        }
      } else {
        if (this.judgeTipStrStatus(widthValue, heightValue, widthLimit, heightLimit) !== 0) {
          status = true;
          if (this.typeofFunction(answerCallback)) {
            answerCallback();
          }
        }
      }
      if (this.typeofFunction(callback)) {
        callback();
      }
    }
    return status;
  }
  hideTipStrForPoint(parentDom, imgDom, widthLimit, heightLimit, callback, answerCallback) {
    if (imgDom.complete) {
      this.hideTipStrForPix(parentDom, imgDom.naturalWidth, imgDom.naturalHeight, widthLimit, heightLimit, callback, answerCallback);
    } else {
      const that = this;
      imgDom.onload = function () {
        that.hideTipStrForPix(parentDom, this.naturalWidth, this.naturalHeight, widthLimit, heightLimit, callback, answerCallback);
      };
      imgDom.onerror = function () {
        console.log('image load error: ' + this.src + '\nreset count: 1');
        that.resetImgUrl(this, this.src, HIDE_PIC.LIMIT_VALUE.ERROR);
      };
    }
  }
}
class Download_Number_Obj {
  constructor(total = 0, completed = 0) {
    this.total = total;
    this.completed = completed;
  }
  addTotal(num = 1) {
    this.total += num;
    return this;
  }
  addCompleted(num = 1) {
    this.completed += num;
    return this;
  }
  decTotal(num = 1) {
    this.total -= num;
    return this;
  }
  decCompleted(num = 1) {
    this.completed -= num;
    return this;
  }
  getTotal() {
    return this.total;
  }
  getCompleted() {
    return this.completed;
  }
  setTotal(num = 0) {
    this.total = num;
    return this;
  }
  setCompleted(num = 0) {
    this.completed = num;
    return this;
  }
  getProgressString(connection = DOWNLOAD_PIC.SYMBOL.DIVIDE) {
    return this.completed + connection + this.total;
  }
}
class Xml_Dom_Obj {
  constructor(xmlString = '') {
    if (/^<.*>$/i.test(xmlString)) {
      const parser = new DOMParser();
      this.xmlDOM = parser.parseFromString(xmlString, 'text/xml');
    } else {
      if (document.implementation && document.implementation.createDocument) {
        this.xmlDOM = document.implementation.createDocument('', '', null);
        if (xmlString) {
          const tempDom = this.xmlDOM.createElement(xmlString);
          this.xmlDOM.appendChild(tempDom);
        }
      } else {
        console.log('您的浏览器不支持文档对象 XMLDOM');
      }
    }
  }
  getXmlDOM() {
    return this.xmlDOM;
  }
  getDocumentElement() {
    return this.xmlDOM.documentElement;
  }
  getNfo() {
    let nfo = '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>\n';
    nfo = nfo + this.xmlDOM.documentElement.outerHTML;
    return nfo;
  }
  insertDOM(rootDom, domString, domText = '') {
    if (domString) {
      const tempDom = this.xmlDOM.createElement(domString);
      tempDom.textContent = domText;
      if (rootDom) {
        rootDom.appendChild(tempDom);
      } else {
        this.xmlDOM.documentElement.appendChild(tempDom);
      }
      return tempDom;
    }
    return null;
  }
}
