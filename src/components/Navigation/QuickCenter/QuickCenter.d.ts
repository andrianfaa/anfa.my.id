export interface QuickCenterParams {
  isOpen: boolean;
  onClickClose: () => void;

  /**
   * Jest Testing ID
   */
  testId?: {
    themeToggler?: string;
  };
}
