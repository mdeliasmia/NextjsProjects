import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'RoutingMetadata',
    description: 'Routing Metadata Description',
};

export default function RoutingMetadata() {
    return (
        <div>
            <h1>Routing Metadata Body</h1>
        </div>
    );
}