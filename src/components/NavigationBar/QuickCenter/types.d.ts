export interface QuickCenterParams {
  isOpen: boolean;
  onClickClose: () => void;
  locale?: string;
  /**
   * Jest Testing ID
   */
  testId?: {
    themeToggler?: string;
    githubButton?: string;
    notificationContainer?: string;
    shortcutContainer?: string;
    parent?: string;
  };
}
