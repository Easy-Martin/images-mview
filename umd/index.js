(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom'), require('hammerjs'), require('rc-queue-anim')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom', 'hammerjs', 'rc-queue-anim'], factory) :
  (global = global || self, factory(global.ImagesMView = {}, global.React, global.ReactDOM, global.Hammer, global.QueueAnim));
}(this, (function (exports, React, ReactDOM, Hammer, QueueAnim) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;
  Hammer = Hammer && Object.prototype.hasOwnProperty.call(Hammer, 'default') ? Hammer['default'] : Hammer;
  QueueAnim = QueueAnim && Object.prototype.hasOwnProperty.call(QueueAnim, 'default') ? QueueAnim['default'] : QueueAnim;

  /* transformjs
   * By dntzhang
   * Github: https://github.com/AlloyTeam/AlloyTouch/tree/master/transformjs
   */
  var Matrix3D = function (n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    this.elements = window.Float32Array ? new Float32Array(16) : [];
    var te = this.elements;
    te[0] = n11 !== undefined ? n11 : 1;
    te[4] = n12 || 0;
    te[8] = n13 || 0;
    te[12] = n14 || 0;
    te[1] = n21 || 0;
    te[5] = n22 !== undefined ? n22 : 1;
    te[9] = n23 || 0;
    te[13] = n24 || 0;
    te[2] = n31 || 0;
    te[6] = n32 || 0;
    te[10] = n33 !== undefined ? n33 : 1;
    te[14] = n34 || 0;
    te[3] = n41 || 0;
    te[7] = n42 || 0;
    te[11] = n43 || 0;
    te[15] = n44 !== undefined ? n44 : 1;
  };

  Matrix3D.DEG_TO_RAD = Math.PI / 180;
  Matrix3D.prototype = {
    set: function (n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
      var te = this.elements;
      te[0] = n11;
      te[4] = n12;
      te[8] = n13;
      te[12] = n14;
      te[1] = n21;
      te[5] = n22;
      te[9] = n23;
      te[13] = n24;
      te[2] = n31;
      te[6] = n32;
      te[10] = n33;
      te[14] = n34;
      te[3] = n41;
      te[7] = n42;
      te[11] = n43;
      te[15] = n44;
      return this;
    },
    identity: function () {
      this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      return this;
    },
    multiplyMatrices: function (a, be) {
      var ae = a.elements;
      var te = this.elements;
      var a11 = ae[0],
          a12 = ae[4],
          a13 = ae[8],
          a14 = ae[12];
      var a21 = ae[1],
          a22 = ae[5],
          a23 = ae[9],
          a24 = ae[13];
      var a31 = ae[2],
          a32 = ae[6],
          a33 = ae[10],
          a34 = ae[14];
      var a41 = ae[3],
          a42 = ae[7],
          a43 = ae[11],
          a44 = ae[15];
      var b11 = be[0],
          b12 = be[1],
          b13 = be[2],
          b14 = be[3];
      var b21 = be[4],
          b22 = be[5],
          b23 = be[6],
          b24 = be[7];
      var b31 = be[8],
          b32 = be[9],
          b33 = be[10],
          b34 = be[11];
      var b41 = be[12],
          b42 = be[13],
          b43 = be[14],
          b44 = be[15];
      te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
      te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
      te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
      te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
      te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
      te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
      te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
      te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
      te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
      te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
      te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
      te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
      te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
      te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
      te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
      te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
      return this;
    },
    // 解决角度为90的整数倍导致Math.cos得到极小的数，其实是0。导致不渲染
    _rounded: function (value, i) {
      i = Math.pow(10, i || 15); // default

      return Math.round(value * i) / i;
    },
    appendTransform: function (x, y, z, scaleX, scaleY, scaleZ, rotateX, rotateY, rotateZ, skewX, skewY, originX, originY, originZ) {
      var rx = rotateX * Matrix3D.DEG_TO_RAD;

      var cosx = this._rounded(Math.cos(rx));

      var sinx = this._rounded(Math.sin(rx));

      var ry = rotateY * Matrix3D.DEG_TO_RAD;

      var cosy = this._rounded(Math.cos(ry));

      var siny = this._rounded(Math.sin(ry));

      var rz = rotateZ * Matrix3D.DEG_TO_RAD;

      var cosz = this._rounded(Math.cos(rz * -1));

      var sinz = this._rounded(Math.sin(rz * -1));

      this.multiplyMatrices(this, [1, 0, 0, x, 0, cosx, sinx, y, 0, -sinx, cosx, z, 0, 0, 0, 1]);
      this.multiplyMatrices(this, [cosy, 0, siny, 0, 0, 1, 0, 0, -siny, 0, cosy, 0, 0, 0, 0, 1]);
      this.multiplyMatrices(this, [cosz * scaleX, sinz * scaleY, 0, 0, -sinz * scaleX, cosz * scaleY, 0, 0, 0, 0, 1 * scaleZ, 0, 0, 0, 0, 1]);

      if (skewX || skewY) {
        this.multiplyMatrices(this, [this._rounded(Math.cos(skewX * Matrix3D.DEG_TO_RAD)), this._rounded(Math.sin(skewX * Matrix3D.DEG_TO_RAD)), 0, 0, -1 * this._rounded(Math.sin(skewY * Matrix3D.DEG_TO_RAD)), this._rounded(Math.cos(skewY * Matrix3D.DEG_TO_RAD)), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      }

      if (originX || originY || originZ) {
        this.elements[12] -= originX * this.elements[0] + originY * this.elements[4] + originZ * this.elements[8];
        this.elements[13] -= originX * this.elements[1] + originY * this.elements[5] + originZ * this.elements[9];
        this.elements[14] -= originX * this.elements[2] + originY * this.elements[6] + originZ * this.elements[10];
      }

      return this;
    }
  };

  function observe(target, props, callback) {
    for (var i = 0, len = props.length; i < len; i++) {
      var prop = props[i];
      watch(target, prop, callback);
    }
  }

  function watch(target, prop, callback) {
    Object.defineProperty(target, prop, {
      get: function () {
        return this['__' + prop];
      },
      set: function (value) {
        if (value !== this['__' + prop]) {
          this['__' + prop] = value;
          callback();
        }
      }
    });
  }

  var Transform = function (element, notPerspective) {
    observe(element, ['translateX', 'translateY', 'translateZ', 'scaleX', 'scaleY', 'scaleZ', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'originX', 'originY', 'originZ'], function () {
      var mtx = element.matrix3D.identity().appendTransform(element.translateX, element.translateY, element.translateZ, element.scaleX, element.scaleY, element.scaleZ, element.rotateX, element.rotateY, element.rotateZ, element.skewX, element.skewY, element.originX, element.originY, element.originZ);
      element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = (notPerspective ? '' : 'perspective(' + (element.perspective === undefined ? 500 : element.perspective) + 'px) ') + 'matrix3d(' + Array.prototype.slice.call(mtx.elements).join(',') + ')';
    });
    element.matrix3D = new Matrix3D();

    if (!notPerspective) {
      observe(element, ['perspective'], function () {
        element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = 'perspective(' + element.perspective + 'px) matrix3d(' + Array.prototype.slice.call(element.matrix3D.elements).join(',') + ')';
      });
      element.perspective = 500;
    }

    element.scaleX = element.scaleY = element.scaleZ = 1; //由于image自带了x\y\z，所有加上translate前缀

    element.translateX = element.translateY = element.translateZ = element.rotateX = element.rotateY = element.rotateZ = element.skewX = element.skewY = element.originX = element.originY = element.originZ = 0;
  };

  (function () {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];

    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  })();

  var To = function (el, property, value, time, ease, onEnd, onChange) {
    var current = el[property];
    var dv = value - current;
    var beginTime = new Date();
    var self = this;

    var currentEase = ease || function (a) {
      return a;
    };

    this.tickID = null;

    var toTick = function () {
      var dt = new Date() - beginTime;

      if (dt >= time) {
        el[property] = value;
        onChange && onChange(value);
        onEnd && onEnd(value);
        cancelAnimationFrame(self.tickID);
        self.toTick = null;
        return;
      }

      el[property] = dv * currentEase(dt / time) + current;
      self.tickID = requestAnimationFrame(toTick); //self.tickID = requestAnimationFrame(toTick);
      //cancelAnimationFrame������ tickID = requestAnimationFrame(toTick);�ĺ���

      onChange && onChange(el[property]);
    };

    toTick();
    To.List.push(this);
  };

  To.List = [];

  To.stopAll = function () {
    for (var i = 0, len = To.List.length; i < len; i++) {
      cancelAnimationFrame(To.List[i].tickID);
    }

    To.List.length = 0;
  };

  To.stop = function (to) {
    cancelAnimationFrame(to.tickID);
  };

  function ease(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
  }

  function ImageMobileView({
    imageList = [],
    current = 0,
    className = '',
    onClose
  }) {
    const [index, setIndex] = React.useState(current);
    const domRef = React.useRef(null);
    const initScaleRef = React.useRef(1);
    React.useEffect(() => {
      const el = domRef.current.querySelectorAll('.image-item')[index].querySelector('img');

      if (!el) {
        return;
      }

      if (el.translateX === undefined) {
        Transform(el);
      }

      const hammer = new Hammer(el);
      hammer.get('pinch').set({
        enable: true
      });
      hammer.get('pan').set({
        direction: Hammer.DIRECTION_ALL
      });
      hammer.get('swipe').set({
        direction: Hammer.DIRECTION_ALL
      });
      hammer.on('doubletap', function (e) {
        e.preventDefault();
        To.stopAll();
        let scale = initScaleRef.current + 1;

        if (scale > 3) {
          initScaleRef.current = 1;
          new To(el, 'scaleX', initScaleRef.current, 300, ease);
          new To(el, 'scaleY', initScaleRef.current, 300, ease);
          el.translateX = 0;
          el.translateY = 0;
        } else {
          initScaleRef.current = scale;
          new To(el, 'scaleX', initScaleRef.current, 300, ease);
          new To(el, 'scaleY', initScaleRef.current, 300, ease);
        }
      });
      hammer.on('pinch', function (e) {
        e.preventDefault();
        const scale = initScaleRef.current * e.scale;
        initScaleRef.current = scale > 3 ? 3 : scale < 1 ? 1 : scale;
        new To(el, 'scaleX', initScaleRef.current, 100, ease);
        new To(el, 'scaleY', initScaleRef.current, 100, ease);
      });
      hammer.on('panmove', function (e) {
        if (el.scaleX > 1) {
          e.preventDefault();
          const {
            width,
            height
          } = el;
          const maxX = (width * el.scaleX - width) / 2;
          const maxY = (height * el.scaleY - height) / 2;
          el.translateX = e.deltaX;
          el.translateY = e.deltaY;

          if (el.translateX > maxX) {
            el.translateX = maxX;
          }

          if (el.translateX < -maxX) {
            el.translateX = -maxX;
          }

          if (el.translateY > maxY) {
            el.translateY = maxY;
          }

          if (el.translateY < -maxY) {
            el.translateY = -maxY;
          }
        }
      });
      hammer.on('panend', function () {
        if (el.scaleX > 1) {
          new To(el, 'translateX', 0, 300, ease);
          new To(el, 'translateY', 0, 300, ease);
        }
      });
      hammer.on('swipeup swipedown', function (e) {
        e.preventDefault();

        if (el.scaleX === 1) {
          onClose && onClose();
        }
      });
      hammer.on('swipeleft', function (e) {
        e.preventDefault();

        if (el.scaleX === 1) {
          setIndex(old => old + 1 > imageList.length - 1 ? old : old + 1);
        }
      });
      hammer.on('swiperight', function (e) {
        e.preventDefault();

        if (el.scaleX === 1) {
          setIndex(old => old - 1 < 0 ? old : old - 1);
        }
      });
      return () => hammer.destroy();
    }, [imageList, onClose, index]);
    return /*#__PURE__*/React__default.createElement("div", {
      className: `image-mobile-view-layout ${className}`,
      ref: domRef
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "image-view-box",
      style: {
        transform: `translateX(-${index * document.body.clientWidth}px)`,
        width: `${imageList.length * 100}%`
      }
    }, imageList.map((v, i) => /*#__PURE__*/React__default.createElement("div", {
      className: "image-item",
      key: i
    }, /*#__PURE__*/React__default.createElement("img", {
      src: v,
      alt: ""
    })))), /*#__PURE__*/React__default.createElement("span", {
      className: "label-index"
    }, index + 1, " / ", imageList.length));
  }

  const ImageViewModal = function ({
    visible,
    onClose,
    imageList,
    current,
    className
  }) {
    const domRef = React.useRef(document.createElement('div'));
    React.useEffect(() => {
      const dom = domRef.current;
      document.body.appendChild(dom);
      return () => {
        document.body.removeChild(dom);
      };
    }, []);
    return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React__default.createElement(QueueAnim, {
      type: "alpha"
    }, visible ? /*#__PURE__*/React__default.createElement(ImageMobileView, {
      key: "animat-image-layout",
      className: className,
      onClose: onClose,
      current: current,
      imageList: imageList
    }) : null), domRef.current);
  };

  exports.ImageMobileView = ImageMobileView;
  exports.default = ImageViewModal;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
