import { Grid } from "@mui/material";
import { Switch, Typography } from "antd";

export function ProfileRealSettings({newProfileSettings, onChange}) {
    return (
        <>
            <Grid item
                xs={12}
                spacing={1}>
                <Typography.Title level={3}>Real Trading Settings</Typography.Title>
            </Grid>
            <Grid item
                xs={12}
                sm={6}>
                <Switch onChange={
                        (value) => onChange(value, "trader", "load-trade-history")
                    }
                    checked={
                        newProfileSettings?.config?.trader?.["load-trade-history"]
                    }
                    checkedChildren="load trades history from exchange"
                    unCheckedChildren="don't load trades history from exchange"/>
            </Grid>
        </>
    )
}