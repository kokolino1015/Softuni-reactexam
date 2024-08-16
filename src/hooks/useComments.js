import { useEffect, useReducer, useState } from "react";
import commentsApi from "../api/commentsAPI"

export  function useCreateComment(){
    const createHandler = (movieId, comment) => commentsApi.create(movieId, comment);
    return createHandler
}

function commentsReducer(state,action){
    switch(action.type){
        case 'GET_ALL':
            return action.payload.slice();
        case 'ADD_COMMENT':
            return [...state,action.payload]
    }
}

export function useGetAllComments(movieId){
    const [comments, dispatch] = useReducer(commentsReducer, []);
    useEffect(()=>{
        (async()=>{
            const result = await commentsApi.getAll(movieId)
            dispatch({type:'GET_ALL', payload:result});
        })()
    }, [movieId])
    return [comments, dispatch]
}