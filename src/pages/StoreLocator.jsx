import React from "react";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    IconButton,
    Button,
    Box,
} from "@mui/material";
import { LocationOn, Call, WhatsApp, Telegram, Place } from "@mui/icons-material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const stores = [
    {
        id: 1,
        name: "Healify Pharmacy, Kochi",
        area: "MG Road, Ernakulam - 682011",
        address: "Near Lulu Mall, Kochi",
        phone: "9847123456",
        mapUrl: "https://www.google.com/maps?q=MG+Road,+Ernakulam",
    },
    {
        id: 2,
        name: "Healify Pharmacy, Trivandrum",
        area: "Palayam, Thiruvananthapuram - 695034",
        address: "Opposite University Stadium",
        phone: "9745632189",
        mapUrl: "https://www.google.com/maps?q=Palayam,+Thiruvananthapuram",
    },
    {
        id: 3,
        name: "Healify Pharmacy, Calicut",
        area: "Mavoor Road, Kozhikode - 673004",
        address: "Near Baby Memorial Hospital",
        phone: "9895647852",
        mapUrl: "https://www.google.com/maps?q=Mavoor+Road,+Kozhikode",
    },
    {
        id: 4,
        name: "Healify Pharmacy, Thrissur",
        area: "Swaraj Round, Thrissur - 680001",
        address: "Near Vadakkunnathan Temple",
        phone: "9567823412",
        mapUrl: "https://www.google.com/maps?q=Swaraj+Round,+Thrissur",
    },
];

const StoreLocator = () => {
    return (
        <>
            <Header />
            <div className="font-[Poppins] min-h-screen bg-[#f9fbfd] py-10">
                <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontWeight: 600, color: "#111", mb: 6 }}
                >
                    Find Your Nearest Healify Pharmacy Store
                </Typography>

                <Grid container justifyContent="center" spacing={10}>
                    {/* Left side – store list */}
                    <Grid size={{ xs: 12, md: 5 }}sx={{
                        px: 2, maxHeight: "500px", // fixed height
                        overflowY: "auto",  // scroll vertically
                        pr: 1,
                        "&::-webkit-scrollbar": {
                            width: "6px",
                        }
                    }} >
                        {stores.map((store) => (
                            <Card
                                key={store.id}
                                sx={{
                                    mb: 1,
                                    p: 2.5,
                                    borderRadius: "16px",
                                    boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
                                    transition: "0.3s ease",
                                    "&:hover": { transform: "translateY(-3px)" },
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold", color: "#111", mb: 1 }}
                                    >
                                        {store.name}
                                    </Typography>

                                    <Typography sx={{ display: "flex", alignItems: "center", color: "#444" }}>
                                        <Place sx={{ fontSize: 20, mr: 1, color: "#0d47a1" }} />
                                        {store.area}
                                    </Typography>

                                    <Typography
                                        sx={{ display: "flex", alignItems: "center", color: "#444", ml: 3, mt: 0.5 }}
                                    >
                                        <LocationOn sx={{ fontSize: 18, mr: 1, color: "#0d47a1" }} />
                                        {store.address}
                                    </Typography>

                                    <Typography
                                        sx={{ display: "flex", alignItems: "center", color: "#0d47a1", ml: 3, mt: 0.5 }}
                                    >
                                        <Call sx={{ fontSize: 18, mr: 1 }} />
                                        {store.phone}
                                    </Typography>

                                    <Box sx={{ display: "flex", mt: 2, ml: 2 }}>
                                        <IconButton sx={{ color: "#1565c0", bgcolor: "#e3f2fd", mr: 1 }}>
                                            <Call />
                                        </IconButton>
                                        <IconButton sx={{ color: "#1565c0", bgcolor: "#e3f2fd", mr: 1 }}>
                                            <Telegram />
                                        </IconButton>
                                        <IconButton sx={{ color: "#25D366", bgcolor: "#e8f5e9" }}>
                                            <WhatsApp />
                                        </IconButton>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>

                    {/* Right side – Map */}
                    <Grid size={{ xs: 12, md: 6 }} sx={{ px: 5 }}>
                        <Box
                            sx={{
                                borderRadius: "16px",
                                overflow: "hidden",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                                height: "500px",
                                position: "relative",
                            }}
                        >
                            <iframe
                                title="Healify Kerala Locations"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.78609833145!2d76.22589149311037!3d9.970864495194213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d08f976f3a9%3A0xe9cdb444f06ed454!2sErnakulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1762105412955!5m2!1sen!2sin"
                                width="500px"
                                height="100%"
                                style={{ border: "0", filter: "brightness(0.95)" }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>

                            <Button
                                variant="contained"
                                sx={{
                                    position: "absolute",
                                    bottom: 20,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    bgcolor: "#0d47a1",
                                    textTransform: "none",
                                    px: 3,
                                    py: 1,
                                    borderRadius: "8px",
                                    "&:hover": { bgcolor: "#093170" },
                                }}
                                onClick={() =>
                                    window.open("https://www.google.com/maps/place/Kerala", "_blank")
                                }
                            >
                                Click to View Map
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </>
    );
};

export default StoreLocator;
