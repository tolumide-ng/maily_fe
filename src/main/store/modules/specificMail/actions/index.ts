import { axiosCall } from "../../../../utilities/helpers/axiosCall";
import { readableErrors } from "../../../../utilities/reusables";
import { AppThunk, StoreActionPropsDefs } from "../../types";
import {
    FETCH_SPECIFIC_MAIL_PENDING,
    FETCH_SPECIFIC_MAIL_SUCCESS,
} from "../actionTypes";

export const fetchSpecificMailPending = () => ({
    type: FETCH_SPECIFIC_MAIL_PENDING,
    payload: {
        status: "loading",
        error: null,
        specificMail: {},
    },
});

export const fetchSpecificMailFailure = (error: string) => ({
    type: FETCH_SPECIFIC_MAIL_PENDING,
    payload: {
        status: "failure",
        error,
        specificMail: {},
    },
});

export const fetchSpecificMailSuccess = (specificMail: {}) => ({
    type: FETCH_SPECIFIC_MAIL_SUCCESS,
    payload: {
        status: "success",
        error: null,
        specificMail,
    },
});

export const fetchSpecificMailAction =
    (props: StoreActionPropsDefs): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(fetchSpecificMailPending());
            const response = await axiosCall(props);
            dispatch(fetchSpecificMailSuccess(response?.data?.data));
        } catch (error) {
            fetchSpecificMailFailure(
                readableErrors[error?.statusCode] ?? error?.message
            );
        }
    };
