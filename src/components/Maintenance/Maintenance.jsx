import'./Maintenance.scss';
import { useTranslation } from 'react-i18next';

export default function Mantenimiento() {
    const { t } = useTranslation();

    return (
        <div className="mantenimiento__container">
            <h1>🛠️ {t('maintenance__title')}</h1>
            <p>{t('maintenance__description')}</p>
        </div>
    );
}
