import React from 'react';
import Meta from './Meta';
import "../styles/main.scss"
import {Helmet} from "react-helmet";

export default ({ children, sidebar, metaTitle, metaDescription, metaPreviewImage="", metaUrlPath="" }) =>
    <div className={"container"}>
        <Helmet>
            <Meta metaTitle={metaTitle}
                  metaDescription={metaDescription}
                  coverImage={metaPreviewImage}
                  urlPath={metaUrlPath}/>
        </Helmet>

        <div className="row">
            <aside className="col-lg-3">
                {sidebar}
            </aside>
            <div className="col-lg-8 offset-lg-1">
                {children}
            </div>
        </div>
    </div>