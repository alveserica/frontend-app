import projectSlice from './project.slice'
import { AnyAction, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from './index'
import { IProjectItem } from "../models/project";
import projectService from "../service/fetch";

export const projectActions = projectSlice.actions

export const fetchAllData = ():ThunkAction <void, RootState, unknown, AnyAction> => {
    return async(dispatch,getState) => {
            if(getState().project.all.length === 0) {
                const response: IProjectItem[] = await projectService.getAllData();
                dispatch(projectActions.setAllData(response))
            }
    }

}
