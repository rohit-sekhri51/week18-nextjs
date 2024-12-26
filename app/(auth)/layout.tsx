import NavBar from "@/component/NavBar";

export default function AuthLayout({children}: {children: React.ReactNode}) {

    return <div>
        {Math.random() < 0.5 && <NavBar />}
        {children}
    </div>
}