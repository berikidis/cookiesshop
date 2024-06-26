import { useLocale, useTranslations } from 'next-intl'
import { locales } from '@/config'
import LocaleSwitcherSelect from '@/components/local-switcher-select'

export default function LocaleSwitcher() {
   const t = useTranslations('LocaleSwitcher')
   const locale = useLocale()

   return (
      <LocaleSwitcherSelect defaultValue={locale}>
         {locales.map((cur) => (
            <option key={cur} value={cur}>
               {t('locale', { locale: cur })}
            </option>
         ))}
      </LocaleSwitcherSelect>
   )
}
