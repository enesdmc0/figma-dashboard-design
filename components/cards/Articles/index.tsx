import React from 'react';
import {File} from "lucide-react";
import CardTitle from "@/components/CardTitle";
import Card from "@/components/Card";

const Articles = () => {
    return (
        <div className="col-span-3">
            <CardTitle title="Articles" upDown icon={File} color="#1E1E1E"/>
            <div className="bg-white rounded-md shadow-xl">
                <Card/>
            </div>
        </div>
    );
};

export default Articles;
