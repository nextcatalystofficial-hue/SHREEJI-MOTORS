import { useState, useMemo } from 'react';
import { Search, Filter, RotateCcw, ArrowUpDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { INVENTORY_CARS, Vehicle } from '../data/cars';
import CarCard from './CarCard';

interface FeaturedCarsProps {
  onSelectCar: (car: Vehicle) => void;
  selectedBrandFilter?: string | null;
  onClearBrandFilter?: () => void;
}

export default function FeaturedCars({
  onSelectCar,
  selectedBrandFilter,
  onClearBrandFilter
}: FeaturedCarsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>(selectedBrandFilter || 'all');
  const [selectedFuel, setSelectedFuel] = useState<string>('all');
  const [selectedTransmission, setSelectedTransmission] = useState<string>('all');
  const [selectedPriceBracket, setSelectedPriceBracket] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Sync external brand filter if prop changes
  useMemo(() => {
    if (selectedBrandFilter) {
      setSelectedBrand(selectedBrandFilter);
    }
  }, [selectedBrandFilter]);

  const brands = ['all', 'Toyota', 'Hyundai', 'Kia', 'Tata Motors', 'Honda'];
  const fuels = ['all', 'Petrol', 'Diesel'];
  const transmissions = ['all', 'Automatic', 'Manual'];
  const priceBrackets = [
    { label: 'All Budgets', value: 'all' },
    { label: 'Under ₹15L', value: 'under-15' },
    { label: '₹15L – ₹25L', value: '15-25' },
    { label: 'Above ₹25L', value: 'above-25' }
  ];

  const filteredCars = useMemo(() => {
    return INVENTORY_CARS.filter((car) => {
      // Search
      const matchesSearch =
        searchTerm === '' ||
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.variant.toLowerCase().includes(searchTerm.toLowerCase());

      // Brand
      const matchesBrand =
        selectedBrand === 'all' ||
        car.brand.toLowerCase() === selectedBrand.toLowerCase();

      // Fuel
      const matchesFuel =
        selectedFuel === 'all' || car.fuel.toLowerCase() === selectedFuel.toLowerCase();

      // Transmission
      const matchesTransmission =
        selectedTransmission === 'all' ||
        car.transmission.toLowerCase() === selectedTransmission.toLowerCase();

      // Price
      let matchesPrice = true;
      if (selectedPriceBracket === 'under-15') {
        matchesPrice = car.priceLakh < 15;
      } else if (selectedPriceBracket === '15-25') {
        matchesPrice = car.priceLakh >= 15 && car.priceLakh <= 25;
      } else if (selectedPriceBracket === 'above-25') {
        matchesPrice = car.priceLakh > 25;
      }

      return matchesSearch && matchesBrand && matchesFuel && matchesTransmission && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceLakh - b.priceLakh;
      if (sortBy === 'price-desc') return b.priceLakh - a.priceLakh;
      if (sortBy === 'newest') return b.year - a.year;
      if (sortBy === 'mileage') return a.mileageKm - b.mileageKm;
      return 0; // default order
    });
  }, [searchTerm, selectedBrand, selectedFuel, selectedTransmission, selectedPriceBracket, sortBy]);

  const hasActiveFilters =
    searchTerm !== '' ||
    selectedBrand !== 'all' ||
    selectedFuel !== 'all' ||
    selectedTransmission !== 'all' ||
    selectedPriceBracket !== 'all' ||
    sortBy !== 'featured';

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedBrand('all');
    setSelectedFuel('all');
    setSelectedTransmission('all');
    setSelectedPriceBracket('all');
    setSortBy('featured');
    if (onClearBrandFilter) onClearBrandFilter();
  };

  return (
    <section id="inventory" className="py-24 sm:py-32 bg-[#0c0c0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E5B842] font-semibold mb-3">
              <span className="w-5 h-[1.5px] bg-[#E5B842]" />
              <span>COLLECTION SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              FIND YOUR NEXT CAR
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
              Explore our curated collection of premium pre-owned vehicles available for inspection at Ratu Road.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search make or model..."
              className="w-full bg-[#161616] border border-white/[0.09] focus:border-[#E5B842]/60 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#E5B842]/40 transition-colors"
            />
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#141414] border border-white/[0.08] rounded-xl p-4 sm:p-5 mb-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Brand Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              <span className="text-xs text-neutral-400 font-medium mr-1 shrink-0 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#E5B842]" />
                <span>Brand:</span>
              </span>
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                    selectedBrand.toLowerCase() === b.toLowerCase()
                      ? 'bg-[#E5B842] text-neutral-950 font-semibold shadow-sm'
                      : 'bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  {b === 'all' ? 'All Brands' : b}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 shrink-0">
              <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
              <select
                value={sortBy}
                aria-label="Sort inventory cars"
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#181818] border border-white/[0.1] text-xs text-neutral-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-[#E5B842] cursor-pointer"
              >
                <option value="featured">Featured Order</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="newest">Newest Model Year</option>
                <option value="mileage">Lowest Mileage</option>
              </select>
            </div>
          </div>

          {/* Secondary Filters (Fuel, Transmission, Budget) */}
          <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-4">
              {/* Fuel */}
              <div className="flex items-center gap-1.5">
                <span className="text-neutral-400">Fuel:</span>
                {fuels.map((f) => (
                  <button
                    key={f}
                    onClick={() => setSelectedFuel(f)}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      selectedFuel.toLowerCase() === f.toLowerCase()
                        ? 'bg-neutral-200 text-neutral-900 font-medium'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {f === 'all' ? 'All' : f}
                  </button>
                ))}
              </div>

              {/* Transmission */}
              <div className="flex items-center gap-1.5">
                <span className="text-neutral-400">Gearbox:</span>
                {transmissions.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTransmission(t)}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      selectedTransmission.toLowerCase() === t.toLowerCase()
                        ? 'bg-neutral-200 text-neutral-900 font-medium'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {t === 'all' ? 'All' : t}
                  </button>
                ))}
              </div>

              {/* Price Bracket */}
              <div className="flex items-center gap-1.5">
                <span className="text-neutral-400">Budget:</span>
                {priceBrackets.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setSelectedPriceBracket(p.value)}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      selectedPriceBracket === p.value
                        ? 'bg-neutral-200 text-neutral-900 font-medium'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-neutral-400 hover:text-[#E5B842] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Vehicles Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} onSelect={onSelectCar} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-20 text-center bg-[#111111] rounded-2xl border border-white/[0.06] p-8">
            <p className="text-base text-neutral-300 font-medium mb-2">
              No vehicles matched your current filter criteria.
            </p>
            <p className="text-xs text-neutral-400 mb-6">
              Try adjusting your price bracket, fuel preference, or brand selection.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 bg-[#E5B842] hover:bg-[#F3D06D] rounded transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Catalog Placeholder Disclaimer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-neutral-400">Showroom Disclaimer:</span> Vehicles shown
            represent curated sample models available for enquiry and showcase at Shreeji Motors.
            For live on-floor stock verification, please visit our Ratu Road showroom or speak with our sales team directly.
          </p>
        </div>
      </div>
    </section>
  );
}
