export interface NavigationMenuParams {
  isOpen: boolean;
  onClickClose: () => void;
  /**
   * Jest Testing ID
   */
  testId?: {
    menu?: string;
    parent?: string;
  };
}
