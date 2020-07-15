import * as React from 'react';

interface ImageMobileViewProps {
  imageList: string[];
  onClose?: Function;
  current?: number;
}
interface ImageMViewProps extends ImageMobileViewProps {
  visible: boolean;
  onClose: Function;
}

declare const ImageMView: React.StatelessComponent<ImageMViewProps>;

export const ImageMobileView: React.StatelessComponent<ImageMobileViewProps>;

export default ImageMView;
