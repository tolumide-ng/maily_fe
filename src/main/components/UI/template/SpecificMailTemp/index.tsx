import * as React from "react";
import { SpecificMailResponseDef } from "../../../../declarations";
import { EmptyMail } from "../../molecules/EmptyMail";
import { LoadingContainer } from "../../molecules/LoadingContainer";
import { SpecificEmail } from "../../organisms/SpecificEmail";
import style from "./index.module.css";

interface SpecificMailTempDef {
    data: SpecificMailResponseDef | null;
    status: string;
    displayClass: string;
    handleGoBack: () => void;
}

export const SpecificMailTemp = (props: SpecificMailTempDef) => {
    return (
        <div className={props.displayClass}>
            {props.status === "fetchSpecificMailSuccess" && props.data ? (
                <SpecificEmail
                    subject={props?.data?.subject ?? ""}
                    date={props?.data?.date ?? ""}
                    html={props?.data?.html ?? ""}
                    messagedId={props.data?.messagedId ?? ""}
                    to={props.data?.to ?? ""}
                    from={props.data?.from ?? ""}
                    handleGoBack={props.handleGoBack}
                />
            ) : (
                <></>
            )}

            {props.status === "fetchSpecificMailPending" ? (
                <LoadingContainer />
            ) : (
                <></>
            )}

            {props.status === "rest" ? <EmptyMail text="Hello" /> : <></>}
        </div>
    );
};
