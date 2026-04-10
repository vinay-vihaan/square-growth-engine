import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EnquiryDialog from "@/components/EnquiryDialog";
import { products, categories, allCropTypes, allProblems } from "@/data/products";

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [cropFilter, setCropFilter] = useState<string>("all");
  const [problemFilter, setProblemFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.shortBenefit.toLowerCase().includes(search.toLowerCase());
      const matchCategory = categoryFilter === "all" || p.category === categoryFilter;
      const matchCrop = cropFilter === "all" || p.cropTypes.includes(cropFilter);
      const matchProblem = problemFilter === "all" || p.problems.includes(problemFilter);
      return matchSearch && matchCategory && matchCrop && matchProblem;
    });
  }, [search, categoryFilter, cropFilter, problemFilter]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-serif">Explore Our Product Range</h1>
          <p className="text-primary-foreground/70 max-w-md mx-auto">
            Find the right solution for your crop, soil, and farming needs.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-8">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden"
          >
            <Filter className="h-4 w-4 mr-2" /> Filters
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-64 space-y-6 flex-shrink-0`}>
            {/* Category */}
            <div className="space-y-3">
              <h3 className="font-semibold text-sm text-foreground font-sans">Category</h3>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => setCategoryFilter("all")}
                  className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${categoryFilter === "all" ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"}`}
                >
                  All Categories
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCategoryFilter(c.id)}
                    className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${categoryFilter === c.id ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"}`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Crop Type */}
            <div className="space-y-3">
              <h3 className="font-semibold text-sm text-foreground font-sans">Crop Type</h3>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => setCropFilter("all")}
                  className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${cropFilter === "all" ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"}`}
                >
                  All Crops
                </button>
                {allCropTypes.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCropFilter(c)}
                    className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${cropFilter === c ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Problem */}
            <div className="space-y-3">
              <h3 className="font-semibold text-sm text-foreground font-sans">Problem</h3>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => setProblemFilter("all")}
                  className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${problemFilter === "all" ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"}`}
                >
                  All Problems
                </button>
                {allProblems.map((p) => (
                  <button
                    key={p}
                    onClick={() => setProblemFilter(p)}
                    className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${problemFilter === p ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"}`}
                  >
                    {p} Issues
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-4">{filtered.length} products found</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {filtered.map((product) => (
                <div key={product.id} className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <Link to={`/products/${product.id}`}>
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={320} height={320} />
                    </div>
                  </Link>
                  <div className="p-4 space-y-2">
                    <span className="text-[10px] md:text-xs font-semibold text-accent uppercase tracking-wider">
                      {categories.find(c => c.id === product.category)?.name}
                    </span>
                    <Link to={`/products/${product.id}`}>
                      <h3 className="font-semibold font-sans text-foreground group-hover:text-primary transition-colors text-sm md:text-base">{product.name}</h3>
                    </Link>
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{product.shortBenefit}</p>
                    <EnquiryDialog
                      productName={product.name}
                      trigger={
                        <Button size="sm" className="w-full bg-gradient-cta text-primary-foreground font-semibold text-xs mt-2">
                          Enquire Now
                        </Button>
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-lg">No products found matching your filters.</p>
                <Button variant="link" className="text-primary mt-2" onClick={() => { setCategoryFilter("all"); setCropFilter("all"); setProblemFilter("all"); setSearch(""); }}>
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
