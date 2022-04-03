import lodash from "lodash";
import CONFIG from "@config";

export const correctEmail = (value) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true;
  }
  return false;
};

export const checkNumberPhone = (number) => {
  if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number)) {
    return true;
  }
  return false;
};

export const debounce = (callback, delay) => {
  return lodash.debounce(callback, delay);
};

export const onScrollBottom = (callBack) => {
  window.onscroll = function (event) {
    if (window.innerHeight + window.scrollY > document.body.offsetHeight) {
      callBack(event);
    }
  };
};

export const keyPressOnlyNumber = (evt) => {
  var theEvent = evt || window.event;
  // Handle paste
  if (theEvent.type === "paste") {
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
};

export function roundToTwo(num) {
  return Number.parseFloat(num).toFixed(2);
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export const spliceArray = (arr: Array<any>, start: number, end: number) => {
  return [...arr].splice(start, end);
};

export const toFirstUpperCase = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
export const toFirstLowerCase = (string: string) => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const deviceType = (): "mobile" | "desktop" | "tablet" => {
  const ua = navigator.userAgent;
  console.debug(ua, navigator.platform);
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

export function isFacebookZaLoApp() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  return (
    ua.indexOf("FBAN") > -1 ||
    ua.indexOf("FBAV") > -1 ||
    ua.indexOf("Zalo") > -1
  );
}

export function abbreviateNumber(number) {
  const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
  let tier = (Math.log10(Math.abs(number)) / 3) | 0;
  if (tier == 0) return number;
  let suffix = SI_SYMBOL[tier];
  let scale = Math.pow(10, tier * 3);
  let scaled = number / scale;
  return scaled.toFixed(1) + suffix;
}

const _s3 = lodash.memoize((link) => {
  if (lodash.isEmpty(link)) {
    return undefined;
  }
  if (link.startsWith("http")) {
    return link;
  }
  return CONFIG.S3_BASE_URL + link;
});

export function toS3(link) {
  return _s3(link);
}
