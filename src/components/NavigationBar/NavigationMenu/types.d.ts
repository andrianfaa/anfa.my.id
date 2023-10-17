export interface NavigationMenuParams {
  isOpen: boolean;
  locale?: string;
  onClickClose: () => void;
  /**
   * Jest Testing ID
   */
  testId?: {
    menu?: string;
    parent?: string;
  };
}
