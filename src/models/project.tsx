export interface IProjectItem {
    createdAt: string;
    name: string;
    avatar: string;
    id: string;
};

export interface IProject {
    all: IProjectItem[];
}