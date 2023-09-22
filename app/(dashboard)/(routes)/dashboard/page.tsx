import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
    return (
        <div>
            <p>Dashboard page (protected)</p>
            <UserButton afterSignOutUrl="/" />
        </div>

    )
}
