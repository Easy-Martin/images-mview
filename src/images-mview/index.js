import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Hammer from 'hammerjs';
import Transform from './transform';
import To from './to';
import ease from './ease';
import QueueAnim from 'rc-queue-anim';
import './index.less';

function ImageMobileView({ imageList = [], current = 0, className = '', onClose }) {
  const [index, setIndex] = useState(current);
  const domRef = useRef(null);
  const initScaleRef = useRef(1);

  useEffect(() => {
    const el = domRef.current.querySelectorAll('.image-item')[index].querySelector('img');
    if (!el) {
      return;
    }
    if (el.translateX === undefined) {
      Transform(el);
    }
    const hammer = new Hammer(el);
    hammer.get('pinch').set({ enable: true });
    hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
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
        const { width, height } = el;
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
        setIndex((old) => (old + 1 > imageList.length - 1 ? old : old + 1));
      }
    });

    hammer.on('swiperight', function (e) {
      e.preventDefault();
      if (el.scaleX === 1) {
        setIndex((old) => (old - 1 < 0 ? old : old - 1));
      }
    });

    return () => hammer.destroy();
  }, [imageList, onClose, index]);
  return (
    <div className={`image-mobile-view-layout ${className}`} ref={domRef}>
      <div
        className="image-view-box"
        style={{
          transform: `translateX(-${index * document.body.clientWidth}px)`,
          width: `${imageList.length * 100}%`,
        }}
      >
        {imageList.map((v, i) => (
          <div className="image-item" key={i}>
            <img src={v} alt="" />
          </div>
        ))}
      </div>
      <span className="label-index">
        {index + 1} / {imageList.length}
      </span>
    </div>
  );
}

const ImageViewModal = function ({ visible, onClose, imageList, current, className }) {
  const domRef = useRef(document.createElement('div'));
  useEffect(() => {
    const dom = domRef.current;
    document.body.appendChild(dom);
    return () => {
      document.body.removeChild(dom);
    };
  }, []);
  return ReactDOM.createPortal(
    <QueueAnim type="alpha">{visible ? <ImageMobileView key="animat-image-layout" className={className} onClose={onClose} current={current} imageList={imageList} /> : null}</QueueAnim>,
    domRef.current
  );
};

export { ImageMobileView };

export default ImageViewModal;
