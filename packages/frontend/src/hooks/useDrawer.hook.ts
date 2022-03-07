import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'state/store';
import { setDrawerVisibility } from 'state/slices/drawer/drawer.slice';
import { isDrawerOpenSelector } from 'state/slices/drawer/drawer.selector';

type DrawerOptions = {
  open: boolean;
  position?: 'left' | 'right' | 'bottom' | 'top';
};

export const useDrawer = () => {
  const isOpen = useTypedSelector(isDrawerOpenSelector);

  const dispatch = useDispatch();

  const handleDrawer = (options: DrawerOptions) => {
    dispatch(setDrawerVisibility(options.open));
  };

  return {
    isOpen,
    handleDrawer,
  };
};
