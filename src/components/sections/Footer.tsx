import { BRAND_NAME, TRANQUILSOFTWARE_LINK } from '../../globals';

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-primary/30 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400">
          {BRAND_NAME}. Made by <a href={TRANQUILSOFTWARE_LINK} target="_blank" rel="noopener noreferrer">Tranquil Software</a>
        </p>
      </div>
    </footer>
  );
}
