import { Typography } from "antd"

export function ProfileDescription({newProfileSettings, setNewProfileSettings}) {
    function handleDescriptionChange(newDesc) {
        setNewProfileSettings(prevSettings => {
            const newSettings = {
                ...prevSettings
            }
            newSettings.profile.description = newDesc
            return newSettings
        })
        // TODO handle api
    }
    return <Typography.Paragraph editable={
        !newProfileSettings.profile.read_only && {
            onChange: handleDescriptionChange,
            text: newProfileSettings?.profile?.description,
            tooltip: 'Click to edit the profile description'

        }
    }>
        {
        newProfileSettings?.profile?.description
    } </Typography.Paragraph>
}
