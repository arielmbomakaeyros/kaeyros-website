'use client';

import { useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { locales } from '@/lib/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type LanguageSwitcherProps = {
  currentLocale: string;
  onChange: (locale: string) => void;
  className?: string;
};

export default function LanguageSwitcher({
  currentLocale,
  onChange,
  className,
}: LanguageSwitcherProps) {
  const router = useRouter();

  const handleLocaleChange = (locale: string) => {
    onChange(locale);
    router.refresh();
  };

  const getFlag = (locale: string) => {
    switch (locale.toLowerCase()) {
      case 'fr':
        return '🇫🇷';
      case 'en':
        return '🇬🇧';
      default:
        return '';
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer flex-row items-center rounded-lg border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          <span>{getFlag(currentLocale)}</span>
          <span className="ml-1">{currentLocale.toUpperCase()}</span>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'h-8 w-8 ml-2 cursor-pointer rounded-full hover:bg-gray-100',
              'focus-visible:ring-primaryColor focus-visible:ring-2',
              'dark:hover:bg-gray-800',
              className,
            )}
            aria-label="Change language"
          >
            <Globe className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </Button>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="min-w-[120px] rounded-md border border-gray-200 bg-white shadow-lg"
      >
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            className={cn(
              'focus:bg-primaryColor/10 cursor-pointer',
              `${currentLocale !== locale ? 'bg-white text-gray-700' : 'bg-[#197BCC] text-white'} flex items-center gap-2 px-2 py-1`,
            )}
          >
            <span className="flex items-center gap-2">
              {getFlag(locale)}
              <span>{locale.toUpperCase()}</span>
              {currentLocale === locale && (
                <span className="bg-primaryColor h-1.5 w-1.5 rounded-full" />
              )}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// 'use client';

// import { useRouter } from 'next/navigation';
// import { Globe } from 'lucide-react';
// import { locales } from '@/lib/i18n';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { Button } from '@/components/ui/button';
// import { cn } from '@/lib/utils';

// type LanguageSwitcherProps = {
//   currentLocale: string;
//   onChange: (locale: string) => void;
//   className?: string;
// };

// export default function LanguageSwitcher({
//   currentLocale,
//   onChange,
//   className,
// }: LanguageSwitcherProps) {
//   const router = useRouter();

//   const handleLocaleChange = (locale: string) => {
//     onChange(locale);
//     router.refresh();
//   };

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <div className="flex cursor-pointer flex-row items-center rounded-2xl bg-[#197BCC] px-3 py-1 text-[15px] font-bold text-white shadow-xl">
//           {currentLocale}
//           <Button
//             variant="ghost"
//             size="icon"
//             className={cn(
//               'h-9 w-9 cursor-pointer rounded-full hover:bg-gray-100',
//               'focus-visible:ring-primaryColor focus-visible:ring-2',
//               'dark:hover:bg-gray-800',
//               className,
//             )}
//             aria-label="Change language"
//           >
//             <Globe className="h-4 w-4 text-white dark:text-gray-300" />
//           </Button>
//         </div>
//       </DropdownMenuTrigger>

//       <DropdownMenuContent
//         align="end"
//         className="min-w-[120px] rounded-md shadow-lg"
//       >
//         {locales.map((locale) => (
//           <DropdownMenuItem
//             key={locale}
//             onClick={() => handleLocaleChange(locale)}
//             className={cn(
//               'focus:bg-primaryColor/10 cursor-pointer',
//               // currentLocale === locale && 'bg-primaryColor/10 font-medium',
//               `${currentLocale !== locale ? 'bg-white text-[#197BCC]' : 'bg-[#197BCC] text-white'} flex items-center gap-2`,
//             )}
//           >
//             <span
//               className={`${currentLocale !== locale ? 'bg-white text-[#197BCC]' : 'bg-[#197BCC] text-white'} flex items-center gap-2`}
//             >
//               {locale.toUpperCase()}
//               {currentLocale === locale && (
//                 <span className="bg-primaryColor h-1.5 w-1.5 rounded-full" />
//               )}
//             </span>
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
