import UserSearch from "./UserSearch";

export default function Header() {

    return (
        <div className="m-10 flex gap-10">
            <h1>Logo</h1>
            <div className="nav">
                navbar
            </div>
            <h1>Serch</h1>
            <UserSearch />
        </div>
    );
}