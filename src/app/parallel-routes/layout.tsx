export default function ParallelLayout({ lineChart, barChart, heatmap }: {
    lineChart: React.ReactNode,
    barChart: React.ReactNode,
    heatmap: React.ReactNode,
}) {
    return (
        <div className="m-10 min-h-7/12">
            <h1>This is Parallel Layout Page T-29</h1>
            <div className="mt-6">{lineChart}</div>
            <div className="mt-6">{barChart}</div>
            <div className="mt-6">{heatmap}</div>
        </div>
    );
}


//slote ex-> @parallel-routes
// Browser URL:
// http://localhost:3000/parallel-routes