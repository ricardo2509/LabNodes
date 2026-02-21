import useSwr from "swr";
import style from "/pages/style.module.css";

async function getAPI(url) {
    const response = await fetch(url);
    const responseBody = await response.json();
    return responseBody;
}

export default function StatusPage() {
    const { isLoading, data } = useSwr("/api/v1/status", getAPI, {
        refreshInterval: 1000,
    });

    return (
        <>
            <h1 className={style.defaultFont}>Status Page</h1>

            {isLoading ? (
                <p>Carregando...</p>
            ) : (
                <pre>
                    <li>
                        <ul style={{ display: "flex" }}>
                            <label className={`${style.label} ${style.w20}`}>
                                Last Atualization:{" "}
                            </label>
                            <label>
                                {new Date(data.updated_at).toLocaleString(
                                    "pt-BR",
                                )}
                            </label>
                        </ul>
                    </li>
                </pre>
            )}

            <h1 className={style.defaultFont}>Database Information</h1>
            {isLoading ? (
                <p>Carregando...</p>
            ) : (
                <pre>
                    <li>
                        <ul style={{ display: "flex" }}>
                            <label className={`${style.label} ${style.w20}`}>
                                Database Version:
                            </label>
                            <label>{data.dependencies.database.version}</label>
                        </ul>
                    </li>
                    <li>
                        <ul style={{ display: "flex" }}>
                            <label className={`${style.label} ${style.w20}`}>
                                Max Connections:
                            </label>
                            <label>
                                {data.dependencies.database.max_connections}
                            </label>
                        </ul>
                    </li>
                    <li>
                        <ul style={{ display: "flex" }}>
                            <label className={`${style.label} ${style.w20}`}>
                                Open Connections:
                            </label>
                            <label>
                                {data.dependencies.database.open_connections}
                            </label>
                        </ul>
                    </li>
                </pre>
            )}
        </>
    );
}
