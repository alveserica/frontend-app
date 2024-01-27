import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { IProject, IProjectItem } from 'src/models/project';

const initialProjectState: IProject = {
  all:[],
}

const projectSlice = createSlice({
  name: 'project',
  initialState: initialProjectState,
  reducers:{
      setAllData(state, action: PayloadAction <IProjectItem[]>){
          state.all = action.payload;
      },
  }
})
export default projectSlice;
