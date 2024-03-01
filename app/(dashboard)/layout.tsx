import Sidebar from "./_Component/sidebar";

interface DashboardPageLayoutprops {
    children: React.ReactNode;
};

 const DashBoardLayout = ({
    children,
}: DashboardPageLayoutprops) =>{

    return(
        <main className="h-full">
            <Sidebar>
                <div className="pl-[80px] h-full">
                {children}
                </div>
            </Sidebar>
             
        </main>
    )
}


export default DashBoardLayout;