import { RootState } from '../../store';

export const isDrawerOpenSelector = (state: RootState) => state.drawer.isOpen;
