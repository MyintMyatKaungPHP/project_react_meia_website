import { useState, useEffect } from "react";
import http from "../services/http";
import { API_CONFIG } from "../config/api";

interface ApiResponse {
  success: boolean;
  data: any;
}

const Test = () => {
  const [basicInfo, setBasicInfo] = useState<ApiResponse | null>(null);
  const [footerInfo, setFooterInfo] = useState<ApiResponse | null>(null);
  const [allSettings, setAllSettings] = useState<ApiResponse | null>(null);
  const [homepageSettings, setHomepageSettings] = useState<ApiResponse | null>(
    null
  );
  const [heroSection, setHeroSection] = useState<ApiResponse | null>(null);
  const [serviceCards, setServiceCards] = useState<ApiResponse | null>(null);
  const [testimonials, setTestimonials] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const ASSET_BASE = API_CONFIG.BASE_URL.replace(/\/api\/?$/, "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch Basic Information
        const { data: basicData } = await http.get(`/site-settings/basic-info`);
        setBasicInfo(basicData);

        // Fetch Footer Information
        const { data: footerData } = await http.get(
          `/site-settings/footer-info`
        );
        setFooterInfo(footerData);

        // Fetch All Settings
        const { data: allData } = await http.get(`/site-settings/all`);
        setAllSettings(allData);

        // Fetch Homepage Settings
        const { data: homepageData } = await http.get(
          `/site-settings/homepage`
        );
        setHomepageSettings(homepageData);

        // Fetch Hero Section (single image)
        const { data: heroData } = await http.get(
          `/site-settings/hero-section`
        );
        setHeroSection(heroData);

        // Fetch Service Cards (updated endpoint)
        const { data: serviceCardsData } = await http.get(
          `/site-settings/service-cards`
        );
        setServiceCards(serviceCardsData);

        // Fetch Testimonials
        const { data: testimonialsData } = await http.get(`/testimonials`);
        setTestimonials(testimonialsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Site Settings API Test</h1>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <p className="mt-4 text-blue-600">Loading API data...</p>
          </div>

          {/* Homepage Settings */}
          {/* moved to main screen after loading */}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Site Settings API Test</h1>
          <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
            <h2 className="text-red-800 font-bold mb-2">Error</h2>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Site Settings API Test</h1>

        {/* Homepage Settings */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-bold mb-4 text-emerald-600">
            Homepage Settings API
          </h2>
          <div className="bg-gray-50 p-4 rounded">
            <pre className="text-sm overflow-auto max-h-96">
              {JSON.stringify(homepageSettings, null, 2)}
            </pre>
          </div>

          {homepageSettings?.data && (
            <div className="mt-4 text-sm">
              <p>
                <strong>page_under_maintenance:</strong>{" "}
                {String(homepageSettings.data.page_under_maintenance)}
              </p>
              <p className="mt-2">
                <strong>under_maintenance_message:</strong>{" "}
                {homepageSettings.data.under_maintenance_message ?? "-"}
              </p>
            </div>
          )}
        </div>

        {/* Hero Section (Single Image) */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">
            Hero Section API (single image)
          </h2>
          <div className="bg-gray-50 p-4 rounded">
            <pre className="text-sm overflow-auto max-h-96">
              {JSON.stringify(heroSection, null, 2)}
            </pre>
          </div>

          {heroSection?.data && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p>
                  <strong>School Name:</strong> {heroSection.data.school_name}
                </p>
                <p className="mt-1">
                  <strong>Intro Text:</strong> {heroSection.data.intro_text}
                </p>
                <p className="mt-1">
                  <strong>Button:</strong> {heroSection.data.button_text} →{" "}
                  {heroSection.data.button_link}
                </p>
              </div>
              <div>
                {heroSection.data.hero_image && (
                  <div>
                    <strong>Hero Image URL:</strong>
                    <div className="text-xs text-gray-500 mb-1">
                      {`http://project_laravel_miea_portal.test${heroSection.data.hero_image}`}
                    </div>
                    <img
                      src={`http://project_laravel_miea_portal.test${heroSection.data.hero_image}`}
                      alt="Hero"
                      className="mt-1 h-28 w-auto rounded border object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Service Cards API */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">
            Service Cards API
          </h2>
          <div className="bg-gray-50 p-4 rounded">
            <pre className="text-sm overflow-auto max-h-96">
              {JSON.stringify(serviceCards, null, 2)}
            </pre>
          </div>

          {serviceCards?.data && Array.isArray(serviceCards.data) && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Service Cards ({serviceCards.data.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceCards.data.map((card: any, index: number) => (
                  <div key={index} className="border rounded-lg p-4 bg-gray-50">
                    <div className="mb-2">
                      <strong>Title:</strong> {card.title}
                    </div>
                    <div className="mb-2">
                      <strong>Details:</strong> {card.details}
                    </div>
                    <div className="mb-2">
                      <strong>Link:</strong> {card.link}
                    </div>
                    <div className="mb-2">
                      <strong>Overlay Color:</strong>
                      <span
                        className="inline-block w-4 h-4 rounded ml-2 border"
                        style={{ backgroundColor: card.overlay_color }}
                      ></span>
                      <span className="ml-2 text-sm text-gray-600">
                        {card.overlay_color}
                      </span>
                    </div>
                    {card.image && (
                      <div>
                        <strong>Image:</strong>
                        <div className="text-xs text-gray-500 mb-1">
                          {card.image}
                        </div>
                        <img
                          src={card.image}
                          alt={card.title}
                          className="mt-1 h-20 w-auto rounded border object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            const nextSibling =
                              target.nextSibling as HTMLElement;
                            if (nextSibling) {
                              nextSibling.style.display = "block";
                            }
                          }}
                        />
                        <div
                          className="text-xs text-red-500 mt-1"
                          style={{ display: "none" }}
                        >
                          Failed to load image: {card.image}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Testimonials API */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">
            Testimonials API
          </h2>
          <div className="bg-gray-50 p-4 rounded">
            <pre className="text-sm overflow-auto max-h-96">
              {JSON.stringify(testimonials, null, 2)}
            </pre>
          </div>

          {testimonials?.data && Array.isArray(testimonials.data) && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Testimonials ({testimonials.data.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {testimonials.data.map((testimonial: any, index: number) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-3">
                      {testimonial.image && (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-12 w-12 rounded-full border object-cover flex-shrink-0"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-blue-600 mb-2">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          "{testimonial.content}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Basic Information */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-600">
            Basic Information API
          </h2>
          <div className="bg-gray-50 p-4 rounded">
            <pre className="text-sm overflow-auto">
              {JSON.stringify(basicInfo, null, 2)}
            </pre>
          </div>

          {basicInfo?.data && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">Logos & Favicon:</h3>

                {/* Light Logo */}
                {basicInfo.data.site_logo_light && (
                  <div className="mb-4">
                    <strong>Light Logo:</strong>
                    <div className="text-xs text-gray-500 mb-1">
                      URL:{" "}
                      {`http://project_laravel_miea_portal.test${basicInfo.data.site_logo_light}`}
                    </div>
                    <img
                      src={`http://project_laravel_miea_portal.test${basicInfo.data.site_logo_light}`}
                      alt="Light Logo"
                      className="w-20 h-20 object-contain border rounded mt-1"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) nextSibling.style.display = "block";
                      }}
                    />
                    <div className="hidden text-red-500 text-sm">
                      Light Logo not found
                    </div>
                  </div>
                )}

                {/* Dark Logo */}
                {basicInfo.data.site_logo_dark && (
                  <div className="mb-4">
                    <strong>Dark Logo:</strong>
                    <div className="text-xs text-gray-500 mb-1">
                      URL:{" "}
                      {`http://project_laravel_miea_portal.test${basicInfo.data.site_logo_dark}`}
                    </div>
                    <img
                      src={`http://project_laravel_miea_portal.test${basicInfo.data.site_logo_dark}`}
                      alt="Dark Logo"
                      className="w-20 h-20 object-contain border rounded mt-1 bg-gray-100"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) nextSibling.style.display = "block";
                      }}
                    />
                    <div className="hidden text-red-500 text-sm">
                      Dark Logo not found
                    </div>
                  </div>
                )}

                {/* Favicon */}
                {basicInfo.data.site_favicon && (
                  <div className="mb-2">
                    <strong>Favicon:</strong>
                    <div className="text-xs text-gray-500 mb-1">
                      URL:{" "}
                      {`http://project_laravel_miea_portal.test${basicInfo.data.site_favicon}`}
                    </div>
                    <img
                      src={`http://project_laravel_miea_portal.test${basicInfo.data.site_favicon}`}
                      alt="Favicon"
                      className="w-8 h-8 object-contain border rounded mt-1"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) nextSibling.style.display = "block";
                      }}
                    />
                    <div className="hidden text-red-500 text-sm">
                      Favicon not found
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Information */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            Footer Information API
          </h2>
          <div className="bg-gray-50 p-4 rounded">
            <pre className="text-sm overflow-auto">
              {JSON.stringify(footerInfo, null, 2)}
            </pre>
          </div>

          {footerInfo?.data && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">Footer Content:</h3>

                {/* Footer Logo */}
                {footerInfo.data.logo && (
                  <div className="mb-4">
                    <strong>Footer Logo:</strong>
                    <div className="text-xs text-gray-500 mb-1">
                      URL:{" "}
                      {`http://project_laravel_miea_portal.test${footerInfo.data.logo}`}
                    </div>
                    <img
                      src={`http://project_laravel_miea_portal.test${footerInfo.data.logo}`}
                      alt="Footer Logo"
                      className="w-20 h-20 object-contain border rounded mt-1"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) nextSibling.style.display = "block";
                      }}
                    />
                    <div className="hidden text-red-500 text-sm">
                      Footer Logo not found
                    </div>
                  </div>
                )}

                {/* Footer Text */}
                {footerInfo.data.description && (
                  <div className="mb-2">
                    <strong>Footer Description:</strong>
                    <p className="text-sm mt-1">
                      {footerInfo.data.description}
                    </p>
                  </div>
                )}

                {/* Copyright Text */}
                {footerInfo.data.copyright_text && (
                  <div className="mb-2">
                    <strong>Copyright Text:</strong>
                    <p className="text-sm mt-1">
                      {footerInfo.data.copyright_text}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* All Settings */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">
            All Settings API
          </h2>

          {/* Image URLs Display */}
          {allSettings?.data && (
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">All Image URLs:</h3>
              <div className="bg-blue-50 p-4 rounded">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {/* Basic Info Images */}
                  <div>
                    <h4 className="font-bold mb-2 text-blue-700">
                      Basic Info Images:
                    </h4>
                    {allSettings.data.basic_info?.site_logo_light && (
                      <div className="mb-1">
                        <strong>Light Logo:</strong>
                        <br />
                        <code className="text-xs bg-white p-1 rounded border">
                          http://project_laravel_miea_portal.test
                          {allSettings.data.basic_info.site_logo_light}
                        </code>
                      </div>
                    )}
                    {allSettings.data.basic_info?.site_logo_dark && (
                      <div className="mb-1">
                        <strong>Dark Logo:</strong>
                        <br />
                        <code className="text-xs bg-white p-1 rounded border">
                          http://project_laravel_miea_portal.test
                          {allSettings.data.basic_info.site_logo_dark}
                        </code>
                      </div>
                    )}
                    {allSettings.data.basic_info?.site_favicon && (
                      <div className="mb-1">
                        <strong>Favicon:</strong>
                        <br />
                        <code className="text-xs bg-white p-1 rounded border">
                          http://project_laravel_miea_portal.test
                          {allSettings.data.basic_info.site_favicon}
                        </code>
                      </div>
                    )}
                  </div>

                  {/* Footer Images */}
                  <div>
                    <h4 className="font-bold mb-2 text-blue-700">
                      Footer Images:
                    </h4>
                    {allSettings.data.footer?.logo && (
                      <div className="mb-1">
                        <strong>Footer Logo:</strong>
                        <br />
                        <code className="text-xs bg-white p-1 rounded border">
                          http://project_laravel_miea_portal.test
                          {allSettings.data.footer.logo}
                        </code>
                      </div>
                    )}
                  </div>

                  {/* Hero Images */}
                  {allSettings.data.homepage?.hero_section?.hero_images && (
                    <div className="col-span-2">
                      <h4 className="font-bold mb-2 text-blue-700">
                        Hero Images:
                      </h4>
                      {allSettings.data.homepage.hero_section.hero_images.map(
                        (image: string, index: number) => (
                          <div key={index} className="mb-1">
                            <strong>Hero Image {index + 1}:</strong>
                            <br />
                            <code className="text-xs bg-white p-1 rounded border">
                              http://project_laravel_miea_portal.test{image}
                            </code>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded">
            <pre className="text-sm overflow-auto max-h-96">
              {JSON.stringify(allSettings, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
