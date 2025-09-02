export default function ConditionalLayout({ lineChart, barChart, heatmap, login }: {
    lineChart: React.ReactNode,
    barChart: React.ReactNode,
    heatmap: React.ReactNode,
    login: React.ReactNode,
}) {
    const isUserLogin = false;

    return (
        <div className="m-10 min-h-7/12">
            {isUserLogin ? <>
                <h1>This is Conditional Routes Layout Page T-30</h1>
                <div className="mt-6">{lineChart}</div>
                <div className="mt-6">{barChart}</div>
                <div className="mt-6">{login}</div>
                <div className="mt-6">{heatmap}</div>
            </> : <div>{login}</div>}
        </div>
    );
}


//slote ex-> @conditional-routes
// Browser URL:
// http://localhost:3000/conditional-routes