﻿// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

export interface Timer {
    id: string,
    description: string,
    projectId: string,
    dateFrom: Date,
    dateTo: Date
}